import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { loginUser } from "../../redux/services/user";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleNewGame = (join = false) => {
    form
      .validateFields()
      .then(async (values) => {
        const user = await loginUser(values.email);
        if (user) {
          navigate(join ? "/lobby" : "/game");
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <Row gutter={[32, 32]} style={{ textAlign: "center" }}>
      <Form form={form}>
        <Col span={24}>
          <h4>Epostanı gir</h4>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Geçerli bir e-posta gerekli",
                type: "email",
              },
            ]}
          >
            <Input placeholder="abc@test.com" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Button onClick={() => handleNewGame()}>Yeni Oyun</Button>
        </Col>
        <Col span={12}>
          <Button onClick={() => handleNewGame(true)}>Oyuna Katıl</Button>
        </Col>
      </Form>
    </Row>
  );
};

export default Home;
