import { dataService } from "../service/dataService.js";

export async function deleteItem(ctx) {
  const id = ctx.params.id;
  const res = confirm("delete");
  if (res) {
    await dataService.delFurniture(id);
    ctx.goTo("/");
  } else {
    return;
  }
}
