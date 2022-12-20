export default function handeler(req, res) {
  res.status(200).json([
    {
      title: "Keep it simple",
      subtitle:
        "less is more when it comes to UI/UX design. Keep your designs clean and uncluttered for a better user experience.",
    },
    {
      title: "Use typography to your advantage",
      subtitle:
        "use different fonts and font sizes to create hierarchy and contrast in your designs.",
    },
    {
      title: "Use whitespace",
      subtitle:
        "Don't be afraid of whitespace in your designs. Use it to create visual interest and to lead the eye to important elements on the page.",
    },
    {
      title: "Use color wisely",
      subtitle:
        "Color can be a powerful tool in UI/UX design. Use it to create visual interest, contrast, and to communicate specific messages.",
    },
    {
      title: "Pay attention to details",
      subtitle:
        "Small details can make a big difference in UI/UX design. Pay attention to things like button styles, hover effects, and animation to really polish your designs.",
    },
  ]);
}
