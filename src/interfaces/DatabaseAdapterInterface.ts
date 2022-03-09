export interface DatabaseAdapterInterface<ORM> {
    connect: (mode: "development" | "test" | "production") => void
    db: ORM
}