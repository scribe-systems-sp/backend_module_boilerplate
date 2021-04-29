import { Module } from './model'

class BaseModule extends Module {
    get name(): string {
        // Short name for your module. 
        return "Base module"
    }
    get description(): string {
        return "Base description"
    }
    get version(): string {
        // for version better to use "x.x.x"
        return "1.0.0"
    }
    get owner(): string {
        return "Test owner"
    }
    get routerPath(): string {
        // router path must be unique and must have pattern : /<organization name>/<....>/<module name>
        // must not have spaces and special characters. only numbers, letters and '_' character
        // organization name 'native' is reserved
        return '/test_org/base_module'
    }
}

export default new BaseModule()