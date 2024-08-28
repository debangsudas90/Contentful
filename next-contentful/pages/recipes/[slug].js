import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export async function getStaticPaths() {

  const res = await client.getEntries({ content_type: "recipe" })

  //returns all the slug of recipes
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params }) {

  /* here the params contains the [slug] of the website visited 
   i.e : http://localhost:3000/recipes/stew-mayo --> params = "stew-mayo"
  */
 
  const { items } = await client.getEntries({
    content_type: "recipe",

    /*
     this 'fields.slug' is a contentful thing which filters the  
     params or the recipes according to the current page params
    */
    'fields.slug' : params.slug
  })
  
  return {
    props: {
      recipe: items[0]
    }
  }
}

export default function RecipeDetails({ recipe }) {
  console.log(recipe);

  return (
    <div>
      Recipe Details
    </div>
  )
}