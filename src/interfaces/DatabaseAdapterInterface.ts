export interface DatabaseAdapterInterface<ORM> {
    connect: (mode: "development" | "test" | "production") => Promise<void>
    db: ORM
}