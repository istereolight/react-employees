import { Button, Form } from "antd";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "link" | "default" | "text" | "primary" | "dashed" | "ghost" | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?:  "default" | "circle" | "round";
  icon?: React.ReactNode
}

export const CustomButton = ({ 
  children,
  htmlType = 'button',
  type,
  danger,
  loading,
  shape,
  icon,
  onClick
}: Props) => {
  return (
    <Form.Item>
      <Button 
        htmlType={ htmlType }
        type = { type }
        danger = { danger }
        loading= {loading}
        shape = { shape }
        icon= { icon }
        onClick={ onClick }
      > 
        { children } 

      </Button>
    </Form.Item>
  )
}
