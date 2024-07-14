function TextContent({ content, text }) {
  return (
    <article className="text-content">
      <h3 className="text-content__title block-title ">
        BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE PRZY ODPOWIEDNIEJ DŁUGOŚCI
      </h3>

      <div className="text-content__main">
        {content.length === 0 && <p className="text-content__main">{text}</p>}
        {content.map((item) => (
          <ol key={item.text}>{item.text}</ol>
        ))}
      </div>
    </article>
  );
}

export default TextContent;
