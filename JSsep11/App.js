function App() {
  const articleData = {
    title: "Майбутнє штучного інтелекту",
    author: {
      name: "Богдан Злодій",
      avatar: "image/avatar.jpeg",
      date: "20 лютого 2026"
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    paragraphs: [
      "Штучний інтелект стрімко змінює світ навколо нас.",
      "Алгоритми машинного навчання аналізують великі обсяги даних та допомагають приймати рішення.",
      "Разом із розвитком AI виникають питання безпеки, етики та відповідальності."
    ]
  };

  return (
    <div>
      <Header title="Tech Blog" />
      <Article data={articleData} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);