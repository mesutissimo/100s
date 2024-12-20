import { Button, Card, Col, Form, Input, Row } from "antd";
import React, { useEffect } from "react";
import { loginUser } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { createSession } from "../../services/session";
import style from "../../assets/style.module.scss";
import { connect } from "react-redux";

const mapStateToProps = ({ user }) => ({ user });

const Home = ({ user }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleNewGame = (join = false) => {
    form
      .validateFields()
      .then(async (values) => {
        const _user = await loginUser(user.id ? user.email : values.email);
        if (_user) {
          if (!join) {
            const sessionID = await createSession();
            if (sessionID) {
              navigate("/game/" + sessionID);
              return;
            }
          }
          navigate("/lobby");
        }
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    if (user.id || user.email) {
    }
  }, [user]);

  return (
    <Row gutter={[16, 16]} style={{ textAlign: "center", marginBottom: 200 }}>
      <Form form={form}>
        <Col span={24}>
          <h1 style={{ fontSize: "6em" }}>100s</h1>
        </Col>
        <Col span={24}>
          <Card style={{ margin: "1em", border: "2px solid gray" }}>
            <Row gutter={[16, 16]}>
              {!user.id && (
                <Col span={24}>
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
                    <Input
                      size="large"
                      placeholder="abc@test.com"
                      style={{
                        fontSize: "2em",
                        border: "2px solid gray",
                        fontWeight: "bold",
                      }}
                    />
                  </Form.Item>
                </Col>
              )}

              <Col span={12} style={{ alignItems: "center" }}>
                <button
                  className={style.greenBtn}
                  onClick={() => handleNewGame()}
                >
                  NEW GAME
                </button>
              </Col>
              <Col span={12} style={{ alignItems: "center" }}>
                <button
                  className={style.yellowBtn}
                  size="large"
                  type="default"
                  onClick={() => handleNewGame(true)}
                >
                  JOIN
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Form>
    </Row>
  );
};

export default connect(mapStateToProps)(Home);
