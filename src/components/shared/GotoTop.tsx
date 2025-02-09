
export  function GotoTop() {

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
    <div className="flex items-center justify-center py-2">
        <button onClick={scrollToTop} className="text-white bg-amber-300 text-center p-2 rounded w-1/4">Go to top</button>
    </div>
  )
}
