# NOIR & NOODLE
### Digital Fine-Dining Menu Experience

**An elegant, interactive and data-driven digital restaurant menu built with HTML, CSS, JavaScript and JSON.**

<p align="center">
  <strong>Discover. Explore. Savour.</strong>
</p>

---

## 1. Overview

**Noir & Noodle** is a modern, responsive digital restaurant menu application designed to transform the traditional dining menu into an interactive and visually immersive experience.

Built around an elegant fine-dining aesthetic, the application combines dynamic data rendering, real-time menu exploration, intelligent filtering and detailed dish specifications within a polished user interface.

Rather than relying on static HTML elements or manually maintained menu cards, Noir & Noodle uses a structured JSON dataset as its primary source of restaurant information. The application processes this dataset through JavaScript to dynamically generate menu categories, calculate dish counts, identify customer favourites and display individual culinary offerings.

The experience is designed to feel more like exploring a premium restaurant's digital identity than browsing a conventional food catalogue.

From discovering different food categories to examining preparation details, dietary classifications, ratings and prices, every interaction is designed to make menu exploration intuitive and engaging.

### Project Objectives

- Develop a fully data-driven restaurant menu experience.
- Eliminate the need to manually create individual menu cards.
- Implement reusable JavaScript rendering and filtering functions.
- Provide customers with meaningful information before selecting a dish.
- Create an elegant, responsive interface suitable for modern restaurants.
- Establish a scalable foundation that can accommodate changing menu data.

---

## 2. Business Value

Traditional restaurant menus often require repeated printing whenever restaurants introduce new dishes, modify prices or update their offerings.

A digital menu provides a more flexible alternative.

### Reduced Maintenance Costs

Menu information is maintained through a structured JSON file rather than being embedded directly into individual HTML elements.

Changes to dish names, descriptions, prices, ratings and availability can be reflected in the application by updating the underlying dataset.

### Improved Customer Experience

Customers can independently explore available dishes, search for particular food items, compare prices and inspect preparation information without navigating through lengthy printed menus.

### Dietary-Based Discovery

Customers can narrow down their choices according to dietary preferences, including vegetarian, non-vegetarian and vegan options.

### Better Menu Discoverability

Dynamic category organization, customer-favourite highlights and multiple sorting options make it easier to discover dishes that match individual preferences.

### Flexible Content Management

The JSON-driven architecture separates menu information from the frontend presentation, making the application easier to maintain and extend as the restaurant's menu evolves.

---

## 3. Key Features

### 3.1 Dynamic Category Architecture

The application automatically identifies unique food categories from the restaurant's JSON dataset.

Instead of hardcoding category cards into the HTML document, JavaScript processes the available menu records and calculates the number of dishes belonging to each category.

Each category card dynamically displays:

- Category name.
- Automatically calculated dish count.
- Category-specific background imagery.
- Sequential category numbering.
- Interactive navigation into the corresponding menu collection.

The category architecture allows new categories to appear automatically when matching records are introduced into the dataset.

This eliminates the need to manually construct additional category elements.

### 3.2 Customer Favourites

A dedicated customer-favourites section highlights the restaurant's highest-rated dishes.

The application:

1. Creates a sorted copy of the original menu dataset.
2. Sorts dishes according to their customer ratings in descending order.
3. Selects the top 12 results.
4. Dynamically generates individual favourite cards.

Each card presents:

- Ranking position.
- Dish name.
- Customer rating.
- Review count, when available.
- Dish description.
- Pricing information.

The section follows a typography-first presentation, deliberately avoiding additional food imagery to maintain a cleaner visual hierarchy.

### 3.3 Interactive Category Menu

Selecting a category opens a dedicated modal containing its corresponding dishes.

The category menu is generated dynamically using the selected category rather than relying on predefined menu layouts.

Customers can explore individual dishes through structured cards displaying:

- Dietary classification.
- Customer rating.
- Dish name.
- Short description.
- Price.
- Access to detailed dish specifications.

The modal also provides integrated search, sorting and filtering controls.

### 3.4 Real-Time Search

An interactive search field allows customers to locate dishes within the currently selected category.

The search operation:

- Captures user input dynamically.
- Removes unnecessary leading and trailing whitespace.
- Performs case-insensitive matching.
- Filters dishes according to their names.
- Updates the displayed results as the search query changes.

Search results work alongside the sorting and filtering functionality, allowing customers to refine their menu exploration without manually navigating through every dish.

### 3.5 Advanced Sorting Engine

Customers can reorganize menu items using multiple sorting criteria.

Available sorting options include:

| Sorting option | Behaviour |
|---|---|
| Recommended | Preserves the default dataset order |
| Price: Low to High | Arranges dishes by ascending price |
| Price: High to Low | Arranges dishes by descending price |
| Highest Rated | Prioritizes dishes with higher ratings |
| Name: A to Z | Sorts dishes alphabetically |

The sorting functionality operates on the selected category's dataset and updates the rendered results accordingly.

### 3.6 Dietary Preference Filtering

The application provides multiple dietary filters to help customers identify suitable dishes.

Available options:

- Vegetarian
- Non-Vegetarian
- Vegan

Customers can select multiple dietary preferences simultaneously.

The filtering engine compares selected preferences against the dietary classification stored in the JSON dataset.

This allows customers to narrow down the available dishes according to their selected requirements.

### 3.7 Price Range Filtering

A numerical price filter provides additional control over menu exploration.

Customers can specify:

- Minimum price.
- Maximum price.

The application converts the supplied values into numbers and filters dishes falling within the selected price range.

The minimum and maximum constraints can also be combined with dietary preferences.

Active filter indicators provide visual feedback about the currently applied filtering conditions.

### 3.8 Detailed Dish Specifications

Every individual menu card provides access to a dedicated dish-detail modal.

This feature goes beyond displaying basic dish information by presenting additional culinary specifications.

**Information displayed includes:**

| Specification | Description |
|---|---|
| Dish Name | Name of the selected culinary item |
| Category | Food category to which the dish belongs |
| Dietary Type | Vegetarian, non-vegetarian or vegan |
| Availability | Current availability status from the dataset |
| Customer Rating | Numerical customer rating |
| Review Count | Number of customer reviews, when available |
| Description | Detailed dish description |
| Preparation Time | Estimated preparation duration |
| Spice Level | Spice intensity of the dish |
| Price | Displayed dish price in Indian Rupees |

The information is populated dynamically from the selected dish object, ensuring that the detail panel corresponds to the actual menu record.

### 3.9 Modal-Based Navigation

The application uses dedicated modal interfaces to organize different menu interactions.

Three primary modal components are implemented:

**Category Menu Modal**
- Displays dishes belonging to the selected category.
- Includes search and sorting controls.
- Provides access to dietary and price filters.

**Filter Modal**
- Contains dietary preference checkboxes.
- Provides minimum and maximum price inputs.
- Includes options to clear or apply filters.

**Dish Details Modal**
- Presents extended culinary specifications.
- Displays availability and dietary information.
- Provides a dedicated return-to-menu action.

This structure keeps the primary interface uncluttered while allowing customers to access additional functionality whenever required.

---

## 4. Design Philosophy & User Interface

Noir & Noodle follows an editorial fine-dining design philosophy.

The interface combines dark atmospheric backgrounds, warm accent colours, expressive typography and subtle motion to establish a premium restaurant identity.

### Visual Identity

The application uses a custom colour palette:

| Colour | Hex Code | Purpose |
|---|---|---|
| Deep Charcoal | `#10110f` | Primary background |
| Warm Gold | `#c58b55` | Accent and highlights |
| Ivory | `#f3eee2` | Primary typography |

### Typography

Two Google Fonts establish the visual hierarchy:

- **Playfair Display:** Used for expressive headings and editorial typography.
- **DM Sans:** Used for navigation, descriptions, labels and interface elements.

### Visual Components

The interface includes:

- Ambient background glow effects.
- CSS-based noise texture overlay.
- Animated marquee section.
- Layered hero imagery.
- Floating decorative elements.
- Custom category cards.
- Typography-focused favourite cards.
- Responsive content grids.
- Animated modal transitions.
- Dedicated restaurant story and visit sections.

### Main Website Sections

1. **Announcement Bar:** Introduces the restaurant's freshly prepared food identity.
2. **Navigation:** Provides access to the homepage, menu, favourites, story and visit sections.
3. **Hero Section:** Establishes the restaurant's visual identity with prominent messaging and imagery.
4. **Category Explorer:** Displays dynamically generated food categories.
5. **Customer Favourites:** Highlights the highest-rated dishes.
6. **Restaurant Story:** Communicates the restaurant's dining philosophy.
7. **Visit Section:** Presents restaurant location and operating hours.
8. **Footer:** Reinforces the restaurant identity.

---

## 5. Technology Stack

| Technology | Implementation |
|---|---|
| HTML5 | Semantic page structure and interface components |
| CSS3 | Styling, responsive layouts, animations and visual effects |
| JavaScript (ES6+) | Dynamic rendering, filtering, sorting and event handling |
| JSON | Structured restaurant menu data |
| Fetch API | Asynchronous retrieval of the menu dataset |
| Google Fonts | Playfair Display and DM Sans |
| Unsplash | Food and restaurant imagery |

### Frontend Architecture

The project follows a lightweight frontend architecture without requiring a dedicated backend server or database for its current functionality.

The JavaScript application retrieves the JSON dataset using the Fetch API and processes the records directly within the browser.

This makes the application suitable for demonstrating data-driven frontend development without introducing unnecessary infrastructure.

---

## 6. Project Structure

```text
noir-and-noodle/
│
├── index.html
│
├── style.css
│
├── script.js
│
├── sample_restaurant_menu.json
│
└── README.md
```

### File Responsibilities

**index.html**

Contains the semantic structure of the application, including navigation, hero section, category explorer, customer favourites, restaurant information and modal interfaces.

**style.css**

Controls the application's visual presentation, including colour variables, typography, responsive layouts, component styling, transitions and animations.

**script.js**

Contains the core application logic, including:

- Asynchronous JSON loading.
- Category extraction and counting.
- Dynamic category rendering.
- Category-specific menu generation.
- Search and sorting operations.
- Dietary and price filtering.
- Customer-favourite selection.
- Dish-detail rendering.
- Modal interactions and event handling.

**sample_restaurant_menu.json**

Acts as the application's structured data source, containing restaurant menu records and their associated properties.

**README.md**

Provides project documentation, setup instructions, technical information and development details.

---

## 7. JSON Data Architecture

One of the central design decisions behind Noir & Noodle is the separation of menu information from the frontend interface.

Rather than embedding individual dishes directly into JavaScript or HTML, the application retrieves structured records from a JSON file.

Each menu record represents an individual dish.

### Supported Data Attributes

| Attribute | Data Type | Description |
|---|---|---|
| `name` | String | Dish name |
| `category` | String | Category classification |
| `description` | String | Dish description |
| `price` | Number | Dish price |
| `dietary` | String | Dietary classification |
| `rating` | Number | Customer rating |
| `review_count` | Number | Number of reviews |
| `is_available` | Number | Availability indicator |
| `preparation_time` | Number | Preparation time in minutes |
| `spice_level` | String | Spice classification |

### Example JSON Record

```json
{
    "name": "Truffle Mushroom Pasta",
    "category": "Pasta",
    "description": "Creamy handcrafted pasta with aromatic truffle oil and sautéed mushrooms.",
    "price": 449,
    "dietary": "veg",
    "rating": 4.85,
    "review_count": 126,
    "is_available": 1,
    "preparation_time": 25,
    "spice_level": "Mild"
}
```

The example illustrates the expected data structure; actual menu records are maintained in the project's JSON dataset.

### Benefits of the Data-Driven Approach

- Menu records can be updated without restructuring HTML.
- New dishes can be introduced by adding JSON objects.
- New categories can be identified automatically.
- Dish counts are calculated programmatically.
- Sorting and filtering operate on structured values.
- The frontend remains independent of individual menu records.

---

## 8. Application Workflow

The application follows a straightforward data-processing and rendering pipeline.

### Initialisation

When the document finishes loading, JavaScript initiates the menu-loading process.

### Data Retrieval

The Fetch API asynchronously retrieves the JSON dataset.

The response is checked before being parsed into JavaScript objects.

### Data Processing

Once the dataset is available, two major operations are initiated:

1. Category extraction and rendering.
2. Customer-favourite identification and rendering.

### Category Generation

The application iterates through the menu records and calculates the total number of dishes belonging to each category.

These results are passed to the category-rendering function.

### Menu Exploration

When a customer selects a category, the application:

1. Stores the selected category.
2. Opens the category modal.
3. Identifies matching menu records.
4. Applies the current search and sorting criteria.
5. Applies optional dietary and price constraints.
6. Dynamically generates the resulting dish cards.

### Dish Inspection

Selecting an individual dish opens its detail modal, which is populated using the selected dish's properties.

### Simplified Architecture

```text
              JSON DATASET
                    |
                    v
              Fetch API
                    |
                    v
            JavaScript Processing
                    |
          +---------+---------+
          |                   |
          v                   v
    Category Engine     Favourite Engine
          |                   |
          v                   v
    Category Cards      Top-Rated Dishes
          |
          v
    Category Selection
          |
          v
     Menu Exploration
          |
     +----+----------------+
     |         |           |
     v         v           v
   Search    Sorting    Filtering
     |         |           |
     +---------+-----------+
               |
               v
         Filtered Dishes
               |
               v
         Dish Selection
               |
               v
        Detailed Specifications
```

---

## 9. Installation & Setup

### Prerequisites

- A modern web browser.
- Visual Studio Code or another code editor.
- A local development server.

### Step 1: Clone the Repository

```bash
git clone <repository-url>
```

### Step 2: Open the Project

Navigate to the project directory:

```bash
cd noir-and-noodle
```

Open the directory in Visual Studio Code.

### Step 3: Verify the Project Files

Ensure the following files are present:

- `index.html`
- `style.css`
- `script.js`
- `sample_restaurant_menu.json`

### Step 4: Start a Local Development Server

Since the application retrieves JSON data using the Fetch API, it should be accessed through a local HTTP server rather than opening the HTML file directly using the `file://` protocol.

For Visual Studio Code, you can use the Live Server extension.

Alternatively, run:

```bash
python -m http.server 5500
```

### Step 5: Open the Application

Visit:

```text
http://localhost:5500
```

The browser will load the application and retrieve the restaurant menu dataset automatically.

---

## 10. Performance & Maintainability Considerations

The application uses a relatively lightweight frontend architecture.

Several implementation choices contribute to its maintainability:

**Asynchronous Data Retrieval**

The Fetch API prevents the application from depending on manually embedded menu records and provides a straightforward mechanism for retrieving structured data.

**Reusable Rendering Functions**

Separate functions handle category cards, dish cards, customer favourites and detailed dish information.

**Separation of Concerns**

HTML handles structure, CSS handles presentation, JavaScript handles application logic and JSON stores menu information.

**Client-Side Processing**

Search, sorting and filtering are performed locally using the already-loaded dataset, avoiding additional network requests for each interaction.

**Dynamic Content Generation**

Menu categories and dishes are generated from the available data rather than being individually hardcoded into the page.

---

## 11. Current Scope & Limitations

Noir & Noodle currently focuses on the customer-facing digital menu experience.

The following capabilities are not part of the current implementation:

- Online food ordering.
- Shopping cart functionality.
- Payment gateway integration.
- Customer registration and authentication.
- Restaurant administration dashboard.
- Live database synchronisation.
- Real-time inventory management.
- Backend-based menu management.

The current implementation uses a local JSON file as its data source. Changes to that file require the application to retrieve the updated dataset.

These capabilities can be considered for future development.

---

## 12. Future Enhancements

The existing architecture provides a foundation for several potential improvements.

### Backend Integration

Introduce a backend service using Python and FastAPI to retrieve restaurant menu information through API endpoints instead of directly loading a local JSON file.

### Restaurant Admin Dashboard

Develop a dedicated administration interface that allows restaurant owners to:

- Add new dishes.
- Modify existing menu records.
- Create and manage categories.
- Update prices.
- Change dish availability.
- Manage menu descriptions.

### Database Integration

Replace the static JSON data source with a database such as SQLite or PostgreSQL to support persistent menu management.

### Dish Imagery

Introduce dynamically managed dish images to provide a more visually descriptive menu experience.

### Allergen Information

Extend the existing dietary filtering system with additional allergen information and ingredient-level specifications.

### Restaurant Analytics

Introduce analytical features that can help restaurant owners understand popular dishes, customer preferences and menu performance.

### Progressive Web Application

Explore PWA capabilities to improve the mobile experience and provide additional application-like functionality.

---

## 13. Learning Outcomes

This project provides practical experience with several important frontend development concepts.

Through Noir & Noodle, the following concepts are explored:

- Working with structured JSON datasets.
- Asynchronous JavaScript using `async/await`.
- Fetch API and response handling.
- Array iteration and object manipulation.
- Dynamic DOM manipulation.
- Creating reusable rendering functions.
- Array filtering, sorting and searching.
- Managing multiple user-interface states.
- Event listeners and interactive components.
- Modal-based interface design.
- Responsive frontend development.
- Separation of data, structure and presentation.

The project also demonstrates how fundamental JavaScript concepts can be combined to develop an application that resembles a practical business-oriented product.

---

## 14. Project Philosophy

Noir & Noodle is built around a simple idea:

**A restaurant menu should be more than a list of dishes and prices. It should be an experience.**

The application brings together structured data, interactive functionality and thoughtful visual design to make restaurant menu exploration more informative, accessible and engaging.

By keeping the underlying architecture lightweight while maintaining a strong focus on user experience, the project demonstrates how core web technologies can be used to build a polished and extensible digital product.

---

## 15. Author & Project Information

**Project:** Noir & Noodle – Digital Fine-Dining Menu

**Category:** Frontend Web Development / Restaurant Technology

**Technologies:** HTML5, CSS3, JavaScript, JSON

**Application Type:** Responsive, Data-Driven Web Application

**Status:** Frontend Development

---

<p align="center">
  <strong>NOIR & NOODLE</strong><br>
  <em>The Art of Good Food.</em>
</p>
