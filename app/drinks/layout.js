import React from "react";

const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl my-8">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>Just Do!</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
