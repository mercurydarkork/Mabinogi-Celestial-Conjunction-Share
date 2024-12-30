// script.js

// Map effect names to colors
const effectColors = {
    "Quick Recovery": "#ffeb3b", // Yellow
    "Range Increase 1": "#4caf50", // Green
    "Range Increase 2": "#8bc34a", // Light Green
    "Slow Enemy": "#f44336", // Red
    "Cooldown Decrease": "#03a9f4", // Blue
    "Pull 1": "#3f51b5", // Indigo
    "Pull 2": "#9c27b0", // Purple
    "None": "#ffffff" // Default (White)
};

// Apply colors dynamically to each dropdown's options
document.querySelectorAll(".effect").forEach(select => {
    select.addEventListener("change", event => {
        // Get selected option
        const selectedOption = event.target.selectedOptions[0];
        const effectName = selectedOption.value;

        // Update the background color of the select box based on selection
        event.target.style.backgroundColor = effectColors[effectName] || "#ffffff";
    });

    // Initialize the dropdown with color styles
    Array.from(select.options).forEach(option => {
        option.style.backgroundColor = effectColors[option.value] || "#ffffff";
    });
});

// Save Layout Button
document.getElementById("save").addEventListener("click", () => {
    const effects = document.querySelectorAll(".effect");
    const layout = Array.from(effects).map(select => select.value || "None");

    alert("Saved Layout:\n" + layout.join("\n"));
});

// Reset Layout Button
document.getElementById("reset").addEventListener("click", () => {
    const effects = document.querySelectorAll(".effect");
    effects.forEach(select => {
        select.value = "";
        select.style.backgroundColor = "#ffffff"; // Reset to default color
    });
});
