import Link from "next/link"

export default function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

  return (
    <div class="card">
        <div class="featured">
            {/* {image} */}
        </div>
        <div class="content">
            <div class="info">
                <h4>{ title }</h4>
                <p>Takes approx { cookingTime } mins to make</p>
            </div>
        </div>
        <div class="actions">
            <Link href={`/recipes/${slug}`}>
                Cook this
            </Link>
        </div>
    </div>
  )
}
