import React, { useState } from "react";
import { Button, Image, Text } from "../UI";
import { RiNotification2Line, RiLogoutCircleLine } from "react-icons/ri";
import { HiOutlineCamera } from 'react-icons/hi'
import { useDispatch, useSelector } from "react-redux";
import { setProjectOpen } from "../../state/modal";
import "./style.css";
import styled from "styled-components";
import generateAvatarColor from "../../utils/generateAvatarColor";

export default function Navbar({ title }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.sidebar.value);
  const { username, email, image } = useSelector((state) => state.user.value);

  const updateImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result.split('base64,')[1];
      // fetch('')
    };
  }

  return (
    <Div>
      <div
        className="align-items-center navbar-container"
        style={open ? { left: "300px" } : { left: "65px" }}
      >
        <Text text={title} className="nav-title" />
        <div className="d-flex align-items-center gap-3">
          <Button
            type="button"
            title="+ Add"
            onClick={() => dispatch(setProjectOpen(true))}
            className="btn btn-primary add-project"
          />
          <button className="btn notification">
            <RiNotification2Line className="icon" />
          </button>
          <div className="user-pic">
            {image ? (
              <Image src={image} alt={username} className="user-img"  onClick={() => setShow((prev) => !prev)} />
            ) : (
              <div
                className="avatar"
                onClick={() => setShow((prev) => !prev)}
                style={{
                  backgroundColor: username
                    ? generateAvatarColor(username)
                    : null,
                }}
              >
                <span>
                  {username ? username.split("")[0].toUpperCase() : null}
                </span>
              </div>
            )}
            <div className={show ? "dropdown show" : "dropdown"}>
              <div className="dropdown-header">
                <div className="pic">
                  {image ? (
                    <Image src={image} alt={username} className="user-img" />
                  ) : (
                    <div
                      className="avatar"
                      style={{
                        backgroundColor: username
                          ? generateAvatarColor(username)
                          : null,
                      }}
                    >
                      <span>
                        {username ? username.split("")[0].toUpperCase() : null}
                      </span>
                    </div>
                  )}
                  <label htmlFor="avatar">
                    <HiOutlineCamera />
                  </label>
                  <input type="file" id="avatar" accept="image/*" onChange={(e) => updateImage(e)} />
                </div>
                <h3 className="username">{username}</h3>
                <h4 className="email">{email}</h4>
              </div>
              <div className="dropdown-footer">
                <button className="btn signout-btn">
                  <RiLogoutCircleLine />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .navbar-container {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.5s;
    background-color: #21222c;
    z-index: 100;
  }

  .user-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;

    .avatar {
      width: 100%;
      height: 100%;
      font-size: 1.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    .user-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .dropdown {
      position: absolute;
      bottom: 0;
      right: 0;
      min-width: 200px;
      background-color: rgba(33, 34, 44, 0.495);
      backdrop-filter: blur(4px);
      border-radius: 0.5rem;
      border: 2px solid #47495d;
      transform: translateY(118%);
      opacity: 0; 
      visibility: hidden;
      transition: all .5s;
      cursor: auto;

      .dropdown-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1.4rem;

        .pic {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 1rem;
          position: relative;
          overflow: hidden;

          .avatar {
            font-size: 3rem;
          }
          #avatar{
            display: none;
          }
          label{
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100%;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .6rem .5rem;
            svg{
              transform: scale(1.4);
              color: #FFF;
            }
          }
        }
        .username {
          font-size: 1.1rem;
          font-weight: 500;
          color: #fff;
        }
        .email {
          font-size: 1rem;
        }
      }

      .dropdown-footer {
        padding: 0.3rem 1rem 0.5rem;
        border-top: 2px solid #47495d;
        margin-top: 0.4rem;

        .signout-btn {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          text-align: left;
          width: 100%;
          padding: 0.2rem 0.5rem;
          color: rgba(255, 49, 42, 0.8);

          svg {
            margin-right: 0.5rem;
            transition: all 0.5s;
          }

          span {
            font-weight: 500;
          }

          &:hover {
            svg {
              margin-right: 1rem;
            }
          }
        }
      }

      &.show {
        transform: translateY(107.5%);
        opacity: 1;
        visibility: visible;
      }
    }
  }
  @media (max-width: 630px) {
    .nav-title {
      font-size: 1rem;
    }
  }
  @media (max-width: 400px) {
    .align-items-center.navbar-container {
      display: flex;
      justify-content: center;
    }
  }
`;
