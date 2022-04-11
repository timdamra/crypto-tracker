import { Link } from 'react-router-dom';

interface Button {
    text: string;
    classNames: string;
    link?: string;
};

type ButtonPropsList = {
    buttons: Button[];
}

export const ButtonsGroup: React.FC<ButtonPropsList> = ({ buttons }) => {
  return (
    <div>
        <div className="buttons">
            {buttons.map((button: Button, idx) => {
                return button.link ? (
                    <Link
                      key={`${button.text}-${idx}`}
                      className={button.classNames}
                      to={button.link}
                    >
                        {button.text}
                    </Link>
                ) : (
                    <button
                      key={`${button.text}-${idx}`}
                      className={button.classNames}
                    >
                        {button.text}
                    </button>
                )
            })}
        </div>
    </div>
  )
}
