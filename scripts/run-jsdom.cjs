const fs = require('fs');
const { JSDOM } = require('jsdom');
(async function(){
  try{
    const html = fs.readFileSync('dist/index.html','utf8');
    const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable', url: 'http://127.0.0.1' });
    const scriptMatch = html.match(/<script[^>]+src="([^"]+)"/);
    if(!scriptMatch) throw new Error('script tag not found');
    const src = scriptMatch[1];
    const jsPath = 'dist' + (src.startsWith('/') ? src : '/' + src);
    const js = fs.readFileSync(jsPath,'utf8');

    const window = dom.window;
    const errors = [];
    window.console.error = function(){
      errors.push({type:'error',args:Array.from(arguments)});
      global.console.error.apply(console,arguments);
    };
    window.console.log = function(){
      errors.push({type:'log',args:Array.from(arguments)});
      global.console.log.apply(console,arguments);
    };
    window.addEventListener('error', e => {
      errors.push({type:'pageerror',message:e.message,stack:(e.error && e.error.stack) || e.filename+':'+e.lineno+':'+e.colno});
    });
    window.addEventListener('unhandledrejection', e => {
      errors.push({type:'unhandledrejection',reason:String(e.reason)});
    });

    const script = dom.window.document.createElement('script');
    script.type = 'module';
    script.textContent = js;
    dom.window.document.head.appendChild(script);

    // Wait a short while and then print results and exit
    setTimeout(()=>{
      const root = dom.window.document.getElementById('root');
      const content = root ? root.innerHTML : '';
      console.log('ROOT_HTML_LENGTH', content.length);
      if(errors.length) console.log('ERRORS', JSON.stringify(errors, null, 2));
      else console.log('NO_ERRORS');
      // Forcefully exit to avoid lingering timers from React scheduler
      process.exit(0);
    }, 3000);

  }catch(e){
    console.error('ERR', e && e.stack || e.message);
    process.exit(1);
  }
})();