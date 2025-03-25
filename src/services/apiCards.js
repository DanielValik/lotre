import supabase from "./supabase";

export async function getCards() {
  const { data, error } = await supabase.from("cards").select("*");
  // .eq("id", id)
  // .single();

  if (error) {
    console.error(error);
    throw new Error("User not found");
  }

  return data;
}
