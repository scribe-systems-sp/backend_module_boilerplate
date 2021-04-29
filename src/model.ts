import { Sequelize } from 'sequelize';
import { Router } from 'express'

export interface IModule {
    name: string
    description: string
    version: string
    owner: string

    routerPath: string

    initDatabase(db: Sequelize): Promise<void>;
    initRouter(router: Router): Promise<void>;
}

export abstract class Module implements IModule {
    initDatabase(db: Sequelize) { return Promise.resolve() }
    initRouter(router: Router) { return Promise.resolve() }

    abstract get name(): string
    abstract get description(): string
    abstract get version(): string
    abstract get owner(): string

    abstract get routerPath(): string
}