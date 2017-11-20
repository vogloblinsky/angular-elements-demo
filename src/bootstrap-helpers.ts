import { enableProdMode, NgModuleFactory, CompilerFactory, Type } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export function getModuleFactory<T>(moduleType: Type<T>): NgModuleFactory<T> {
  const platformRef = platformBrowserDynamic();
  const compilerFactory = platformRef.injector.get(CompilerFactory) as CompilerFactory;
  const compiler = compilerFactory.createCompiler([]);

  platformRef.destroy();

  return compiler.compileModuleSync(moduleType);
}

export function onError(err) {
  console.error(err);

  const redefineError =
    'Failed to execute \'define\' on \'CustomElementRegistry\': ' +
    'this name has already been used with this registry';

  if (err.message === redefineError) {
    console.log('Reloading to clear CustomElementRegistry...');
    window.location.reload();
  }
}
