// Extend Puppeteer interfaces transparently to the end user.
// Note, we need to manually copy this file into the build dir (yarn copy-dts): https://stackoverflow.com/questions/56018167
// Note2: It's not sufficient to just copy over this d.ts file, it needs to be referenced by another .ts file!

// This import statement is important for all this to work, otherwise we don't extend but replace the puppeteer module definition.
// https://github.com/microsoft/TypeScript/issues/10859
import {} from 'puppeteer'

import { RecaptchaPluginPageAdditions } from './types'

declare module 'puppeteer' {
  interface Page extends RecaptchaPluginPageAdditions {}
  interface Frame extends RecaptchaPluginPageAdditions {}
}

declare module 'puppeteer-core' {
  interface Page extends RecaptchaPluginPageAdditions {}
  interface Frame extends RecaptchaPluginPageAdditions {}
}
