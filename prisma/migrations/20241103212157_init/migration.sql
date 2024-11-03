-- CreateTable
CREATE TABLE "Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contenido" TEXT NOT NULL,
    "peso" REAL NOT NULL,
    "largo" REAL NOT NULL,
    "alto" REAL NOT NULL,
    "ancho" REAL NOT NULL
);
