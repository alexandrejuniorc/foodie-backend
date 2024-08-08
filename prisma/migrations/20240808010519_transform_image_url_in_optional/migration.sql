-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_restaurants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "image_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_restaurants" ("created_at", "description", "id", "image_url", "location", "name", "rating", "updated_at") SELECT "created_at", "description", "id", "image_url", "location", "name", "rating", "updated_at" FROM "restaurants";
DROP TABLE "restaurants";
ALTER TABLE "new_restaurants" RENAME TO "restaurants";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
