import { RecipeCard } from "@/components/RecipeCard";
import { recipesService } from "@/services/recipes.service";
import { IngredientCard } from "@/components/IngredientCard";


export const Home = () => {
    const ingredients = recipesService.getIngredients();

    return (
        <section className="pb-20 pt-12">
            <h4 className="font-semibold text-2xl px-4 mb-6">Recipes</h4>
            <div className="w-full flex gap-4 overflow-x-auto overscroll-x-auto scrollbar-hide py-2 px-4">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
            <div className="flex justify-between items-center mt-4 mb-2 px-4">
                <p className="text-dark0 text-base font-semibold">Search by ingredients</p>
                <p className="text-primary">View all</p>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto scrollbar-hide py-6 px-4">
                {ingredients.map(ingredient => (
                    <IngredientCard {...ingredient}/>
                ))}
            </div>
        </section>
    )
}