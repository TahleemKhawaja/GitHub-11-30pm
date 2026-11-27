import { useState } from 'react';

const Accordian = () => {
  const data = [
    {
      id: 'item-1',
      title: 'How do I reset my password?',
      content:
        "Click 'Forgot Password' on the login screen and enter your registered email address to receive a reset link.",
      defaultOpen: true,
    },
    {
      id: 'item-2',
      title: 'Can I change my subscription plan later?',
      content:
        'Yes, you can upgrade or downgrade your plan anytime from your account billing settings.',
      defaultOpen: false,
    },
    {
      id: 'item-3',
      title: 'Where can I view my invoices?',
      content:
        'All past and current invoices are available as downloadable PDFs under Billing > Payment History.',
      defaultOpen: false,
    },
  ];
  const [savedItem, setSavedItem] = useState(null);

  function handleItem(item) {
    setSavedItem((prev) => (prev === item ? null : item));
  }
  return (
    <div>
      {data && data.length > 0
        ? data.map((item) => (
            <div key={item.id} onClick={() => handleItem(item.id)}>
              <h3>{item.title}</h3>
              {savedItem === item.id ? <p>{item.content}</p> : null}
            </div>
          ))
        : null}
    </div>
  );
};

export default Accordian;
