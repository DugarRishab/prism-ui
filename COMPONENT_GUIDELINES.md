# Prism UI Component Guidelines

These guidelines provide a set of best practices and conventions for creating components in the Prism UI library. Following these guidelines will ensure consistency, maintainability, and ease of use for developers using Prism UI components.

## Naming Convention

- Use descriptive and meaningful names for components.
- Component names should be in PascalCase.
- Avoid generic or ambiguous names to prevent conflicts with other libraries.

## Component Structure

- Each component should be organized in its own directory.
- Use the following structure for a component directory:

```md
├──ComponentName/  
  |  
  ├──ComponentName.jsx // Component implementation  
  ├──ComponentName.css // Component styles (if applicable)  
  ├──ComponentName.test.js // Component unit tests (optional)
  ├──index.js // Component export
```

- See the entire dir of this project [here](https://github.com/DugarRishab/prism-ui/blob/main/_dir.md). You are in no way supposed to disturb this dir without the permission of Maintainers.
  
## Component API

- Clearly define the component's props and their types using PropTypes.
- Provide default prop values when applicable.
- Document the purpose and usage of each prop, including any constraints or limitations.
- Use prop validation to ensure correct usage and prevent common mistakes.

## Component Styling

- Use CSS for component styling.
- Keep styles scoped to the component to prevent global style conflicts.
- Use class or prop names that are specific to the component to avoid clashes with other styles.
- Use propoer heirarchy while writting css.  For example: 

	```html
	<div className="box">
		<div className="text">
			<p> Example </p>
		</div>
	</div>
	```

	For this html, a proper css will look like:

	```css
	.box{
		...
	}
	.box .text{
		...
	}
	.box .text p{
		...
	}
	```


## Documentation

- Provide comprehensive documentation for each component.
- Include an overview, usage examples, and a detailed description of props and their usage.
- Provide code snippets and live examples to demonstrate proper usage.
- Update the documentation whenever there are significant changes or additions to a component.

## Testing (optional)

- Write unit tests for components to ensure correctness and prevent regressions.
- Test component rendering, prop validation, and interactions.
- Aim for high test coverage to increase confidence in component behavior.

## Accessibility

- Design components with accessibility in mind, following [WCAG guidelines](https://guides.cuny.edu/accessibility/whyitmatters#:~:text=WCAG%202.0%20is%20based%20on,operable%2C%20understandable%2C%20and%20robust.).
- Provide appropriate ARIA roles, attributes, and labels.
- Test components using screen readers and automated accessibility tools.
