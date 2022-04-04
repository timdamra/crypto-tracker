import React, { useState } from 'react';

interface AccordionViewProps {
    title: string;
}

export const AccordionView: React.FC<AccordionViewProps> = ({
    title,
    children
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return isOpen ? (
        <>
          {children}
          <button
            className="button is-info is-rounded"
            onClick={() => setIsOpen(false)}
          >
              Close
          </button>
        </>
    ) : (
        <button
          className="button is-medium is-fullwidth is-rounded is-light"
          onClick={() => setIsOpen(true)}
        >
            {title}
        </button>
    );
}
