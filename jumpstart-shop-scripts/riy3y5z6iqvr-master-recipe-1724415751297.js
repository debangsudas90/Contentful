module.exports = function (migration) {
  const recipe = migration
    .createContentType("recipe")
    .name("Recipe")
    .description("")
    .displayField("title");

  recipe
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(true)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        size: {
          min: 3,
          max: 50,
        },

        message: "Title should be between 3 & 50 chars long",
      },
    ])
    .disabled(false)
    .omitted(false);

  recipe
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
          flags: null,
        },

        message: "Only alphanumberic and hyphens allowed",
      },
    ])
    .disabled(false)
    .omitted(false);

  recipe
    .createField("thumbnail")
    .name("Thumbnail")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ["image"],
        message: "Please upload image type files only",
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  recipe
    .createField("featuredImage")
    .name("Featured Image")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ["image"],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  recipe
    .createField("ingredients")
    .name("Ingredients")
    .type("Array")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Symbol",
      validations: [],
    });

  recipe
    .createField("cookingTime")
    .name("Cooking Time")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  recipe
    .createField("method")
    .name("Method")
    .type("RichText")
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: [
          "bold",
          "italic",
          "underline",
          "code",
          "superscript",
          "subscript",
          "strikethrough",
        ],

        message:
          "Only bold, italic, underline, code, superscript, subscript, and strikethrough marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "table",
          "hyperlink",
          "entry-hyperlink",
          "embedded-entry-inline",
        ],

        message:
          "Only heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, table, link to Url, link to entry, and inline entry nodes are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  recipe.changeFieldControl("title", "builtin", "singleLine", {});
  recipe.changeFieldControl("slug", "builtin", "slugEditor", {});
  recipe.changeFieldControl("thumbnail", "builtin", "assetLinkEditor", {});
  recipe.changeFieldControl("featuredImage", "builtin", "assetLinkEditor", {});
  recipe.changeFieldControl("ingredients", "builtin", "tagEditor", {});
  recipe.changeFieldControl("cookingTime", "builtin", "numberEditor", {});
  recipe.changeFieldControl("method", "builtin", "richTextEditor", {});
};
