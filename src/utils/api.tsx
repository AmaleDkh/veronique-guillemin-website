const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiStrapiUrl = process.env.NEXT_PUBLIC_API_STRAPI_URL;

// Get all posts
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${apiUrl}/sections`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des posts");
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Erreur lors de la récupération des posts", error);
    throw error;
  }
};

// Get all text and image sections
export const fetchTextAndImageSections = async () => {
  try {
    const response = await fetch(`${apiUrl}/text_image_section`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();
    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get homepage content
export const fetchHomepageContent = async () => {
  try {
    const response = await fetch(`${apiUrl}/homepage`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET de la page");
    }

    const page = await response.json();

    return page;
  } catch (error) {
    console.error("Erreur lors de la récupération de la page", error);
    throw error;
  }
};

// Get about page content
export const fetchAboutPageContent = async () => {
  try {
    const response = await fetch(`${apiUrl}/aboutpage`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET de la page");
    }

    const page = await response.json();

    return page;
  } catch (error) {
    console.error("Erreur lors de la récupération de la page", error);
    throw error;
  }
};

// Get about page content
export const fetchContactPageContent = async () => {
  try {
    const response = await fetch(`${apiUrl}/contactpage`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET de la page");
    }

    const page = await response.json();

    return page;
  } catch (error) {
    console.error("Erreur lors de la récupération de la page", error);
    throw error;
  }
};

// Get homepage content
export const fetchHomepagePageContent = async () => {
  try {
    const response = await fetch(`${apiStrapiUrl}/homepage?populate=*`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET de la page");
    }

    const page = await response.json();

    // console.log("🧾 Données JSON récupérées depuis Strapi :", page);

    return page;
  } catch (error) {
    console.error("Erreur lors de la récupération de la page", error);
    throw error;
  }
};

// Get about page content
export const fetchAboutpagePageContent = async () => {
  try {
    const response = await fetch(`${apiStrapiUrl}/aboutpage?populate=*`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET de la page");
    }

    const page = await response.json();

    return page;
  } catch (error) {
    console.error("Erreur lors de la récupération de la page", error);
    throw error;
  }
};
