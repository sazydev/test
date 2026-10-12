import { faqs } from "@/lib/formations";

export function FAQ() {
  return (
    <section id="faq" className="section container faq-section">
      <div>
        <p className="eyebrow">03 / ON T’ÉCLAIRE</p>
        <h2>
          UNE QUESTION
          <br />
          <span className="accent">AVANT LE DÉCLIC ?</span>
        </h2>
        <p className="faq-intro">
          Les réponses pour avancer
          <br />
          l’esprit tranquille.
        </p>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <details key={question} name="faq">
            <summary>
              <span className="faq-number">0{index + 1}</span>
              <h3>{question}</h3>
              <span className="faq-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
