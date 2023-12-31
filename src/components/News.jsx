import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card, Space } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import moment from "moment";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import Loader from "./Loader";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImgUrl =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency" >Cryptocurrency</Option>
            {data?.data?.coins?.map((coin, index) => (
              <Option value={coin.name} key={index}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}

      {cryptoNews?.value.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news?.name}
                </Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImgUrl}
                  alt="news"
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                />
              </div>
              <p>
                {news?.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <Space align="baseline" size={"large"}>
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImgUrl
                      }
                      alt="news"
                    />
                    <Text className="provider-name">
                      {" "}
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </Space>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
