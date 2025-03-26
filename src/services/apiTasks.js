import supabase from "./supabase";

export async function getAllTasks(cardId) {
  const { data, error } = await supabase.from("tasks").select("*");

  if (error) {
    console.error(error);
    throw new Error("Tasks not found");
  }

  return data;
}
