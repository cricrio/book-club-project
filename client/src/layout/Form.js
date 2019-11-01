import React from 'react';

export function Form({ formik, button, children }) {
  const Button = button;
  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {React.Children.map(children, c =>
          React.cloneElement(c, {
            style: { marginBottom: '1rem' },
            onChange: formik.handleChange
          })
        )}
      </div>
      <Button />
    </form>
  );
}
