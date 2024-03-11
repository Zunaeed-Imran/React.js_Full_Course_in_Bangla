import React, { useState } from 'react'
import { faqdata } from './Data';
import FAQ2 from './FAQ2';

console.log(faqdata);

const FAQ = () => {

  const [faq, setFaq] = useState(faqdata);


  return (
    <main>
      <h1>FAQ</h1>
      {faq.map(faq => <FAQ2 key={faq.id} {...faq} />)}
    </main>
  )
}

export default FAQ;

// in sprade operator we send data to `FAQ2` with destructuring. 