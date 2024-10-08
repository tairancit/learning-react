import '../styles/Button.css';

interface ButtonProps {
    label: string;  // Texto do botão
    onClick: () => void;  // Função chamada ao clicar no botão
    type?: "button" | "submit" | "reset";  // Tipo do botão (opcional)
  }

  const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => {
    return (
      <button className="button" type={type} onClick={onClick}>
        {label}
      </button>
    );
  };
  
  export default Button;