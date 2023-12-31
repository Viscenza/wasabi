import Route from "@ioc:Adonis/Core/Route";

// Routes for Project
Route.group(() => {
  Route.get("/", "ProjectController.index"),
    Route.post("/", "ProjectController.create"),
    Route.delete("/:id", "ProjectController.delete");
}).namespace("App/Controllers/Http");

// Routes for Todo
Route.group(() => {
  Route.get("/:id/todo", "TodoController.index"),
    Route.post("/:id/todo", "TodoController.create"),
    Route.put("/:id/todo/:id_todo", "TodoController.update"),
    Route.delete("/:id/todo/:id_todo", "TodoController.delete");
}).namespace("App/Controllers/Http");
