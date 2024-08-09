-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_foods" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "time" INTEGER NOT NULL,
    "delivery" REAL NOT NULL,
    "rating" REAL NOT NULL,
    "image_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "restaurantId" TEXT NOT NULL,
    CONSTRAINT "foods_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "restaurants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_foods" ("created_at", "delivery", "id", "image_url", "name", "price", "rating", "restaurantId", "time", "updated_at") SELECT "created_at", "delivery", "id", "image_url", "name", "price", "rating", "restaurantId", "time", "updated_at" FROM "foods";
DROP TABLE "foods";
ALTER TABLE "new_foods" RENAME TO "foods";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
