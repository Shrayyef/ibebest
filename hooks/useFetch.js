/** @format */

import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "../app/reducers/app";
export const BASE_URL = "http://i-be-best-api.projects-dev.net/api/v1";
export const BASE_URL_CSRF = "http://i-be-best-api.projects-dev.net/api";
const useFetch = () => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const fetchData = async ({
    body = {},
    token = "",
    headers = {},
    method = "GET",
    params = {},
    url,
    withCredentials,
    noResponse,
  }) => {
    setloading(true);
    setStatus("fetching");

    const req_headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
    };

    if (token) {
      req_headers.Authorization = `Bearer ${token}`;
    }

    const requestInfo = {
      method: method || "GET",
      headers: req_headers,
    };

    if (withCredentials) {
      requestInfo.credentials = "include";
    }

    if (body && Object.keys(body).length) {
      requestInfo.body = JSON.stringify(body);
    }

    Object.keys(params).forEach((key) => {
      if (!params[key] || params[key] === "false") delete params[key];
    });

    Object.keys(params).map((key, index) => {
      if (index === 0) {
        url += `?${key}=${params[key]}`;
      } else {
        url += `&${key}=${params[key]}`;
      }
    });

    const response = await fetch(url, requestInfo);

    if (noResponse) {
      return { data: {}, statusCode: response.status };
    }

    const data = await response.json();
    if (!response.ok) {
      if (data.errors) {
        const message = Object.keys(data.errors).map(
          (key) => data.errors[key][0]
        );

        notification.error({
          message: "Notification Title",
          description: message.join("\n"),
        });
      } else {
        notification.error({
          message: data.status,
          description: data.message,
        });
      }
    }
    if (response.status === 401) {
      dispatch(logout());
    }
    setData(data);
    setStatus("fetched");
    setloading(false);
    return { data, statusCode: response.status };
  };

  const login = async ({ data }) => {
    return await fetchData({
      body: data,
      url: `${BASE_URL}/auth/login`,
      // url: "http://localhost:2020/api/login",
      method: "POST",
      withCredentials: true,
    });
  };

  const csrf = async () => {
    return await fetchData({
      url: `${BASE_URL_CSRF}/csrf-cookie`,
      withCredentials: true,
      noResponse: true,
    });
  };

  const signup = async ({ data }) => {
    return await fetchData({
      body: data,
      url: `${BASE_URL}/auth/register`,
      method: "POST",
      withCredentials: true,
    });
  };

  const me = async ({ token }) => {
    return await fetchData({ url: `${BASE_URL}/me`, token });
  };

  const mostWanted = async () => {
    return await fetchData({
      url: `${BASE_URL}/product/most_wanted`,
      method: "POST",
    });
  };

  const topRating = async () => {
    return await fetchData({
      url: `${BASE_URL}/product/top_rating`,
      method: "POST",
    });
  };

  const greatOffers = async () => {
    return await fetchData({
      url: `${BASE_URL}/product/great_offers`,
      method: "POST",
    });
  };

  const forYou = async () => {
    return await fetchData({
      url: `${BASE_URL}/categories/for_you`,
      method: "POST",
    });
  };

  const addToCart = async (token, data) => {
    return await fetchData({
      url: `${BASE_URL}/user_card/add_product`,
      method: "POST",
      body: data,
      token,
    });
  };

  const userCart = async (token) => {
    return await fetchData({
      url: `${BASE_URL}/user_card/get_products`,
      token,
    });
  };

  const updateCart = async (token, data) => {
    return await fetchData({
      url: `${BASE_URL}/user_card/update_amount`,
      token,
      body: data,
      method: "POST",
    });
  };

  const deleteItem = async (token, id) => {
    return await fetchData({
      url: `${BASE_URL}/user_card/delete_product/${id}`,
      token,
    });
  };

  const cartPackages = async (token) => {
    return await fetchData({
      url: `${BASE_URL}/user_card/packges`,
      token,
    });
  };

  const orderPlace = async (token, data) => {
    return await fetchData({
      url: `${BASE_URL}/order/place`,
      token,
      body: data,
      method: "POST",
    });
  };

  return {
    status,
    data,
    loading,
    login,
    me,
    signup,
    topRating,
    mostWanted,
    greatOffers,
    forYou,
    csrf,
    addToCart,
    userCart,
    updateCart,
    deleteItem,
    cartPackages,
    orderPlace,
  };
};

export default useFetch;
