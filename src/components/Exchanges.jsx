import React, { useEffect, useState } from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";

import {
  useGetExchangesQuery,
} from "../services/cryptoAPI";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data :coinExchangeList, isFetching } = useGetExchangesQuery();
console.log(coinExchangeList?.data?.exchanges);
  if (isFetching) return <Loader />;

  return (
    <>
      <Row style={{ marginBlock:'20px' }}>
        <Col span={8} style={{paddingLeft:'30px'}}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        {/* <Col span={6}>Change</Col> */}
      </Row>
      <Row>
        {coinExchangeList?.data?.exchanges?.map((exchange, index) => (
          <Col span={24} key={index}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={
                  <Row key={exchange.uuid}>
                    <Col span={8}>
                      {/* <Text>{<strong>{exchange.rank}.</strong>}</Text> */}
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange["24hVolume"])}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    {/* <Col span={6}>{millify(exchange.marketShare)}%</Col> */}
                  </Row>
                }
              >
                {/* {HTMLReactParser(exchange.description || "")} */}
                {<a href={exchange.coinrankingUrl} target="_blank">Explore</a>}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
