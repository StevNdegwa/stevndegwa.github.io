import styled from "styled-components";
import wall from "@assets/images/Wall.png"
import { FlexBox } from "@components/molecules";

export const Wrapper = styled(FlexBox)`
  height: 100%;
  margin-bottom: 50px;
`;

export const Stephen = styled.img`
  width: 300px;
`;

export const Intro = styled(FlexBox)`
height: 420px;
background-image: url('${wall}');
background-size: auto 100%;
`;

export const AboutCard = styled.div`
  width: 578px;
  height: 222px;
  position: relative;
  top: 40px;
  left: 20px;
  & > div {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(
      4.907% 0%,
      4.907% 0%,
      4.221% 0.139%,
      3.57% 0.54%,
      2.963% 1.182%,
      2.409% 2.044%,
      1.916% 3.103%,
      1.493% 4.337%,
      1.149% 5.725%,
      0.892% 7.245%,
      0.732% 8.875%,
      0.677% 10.593%,
      0.677% 82.627%,
      0.677% 82.627%,
      0.732% 84.345%,
      0.892% 85.975%,
      1.149% 87.495%,
      1.493% 88.883%,
      1.916% 90.118%,
      2.409% 91.176%,
      2.963% 92.038%,
      3.57% 92.68%,
      4.221% 93.082%,
      4.907% 93.22%,
      73.435% 93.22%,
      73.435% 93.22%,
      74.121% 93.082%,
      74.772% 92.68%,
      75.379% 92.038%,
      75.933% 91.176%,
      76.426% 90.118%,
      76.849% 88.883%,
      77.193% 87.495%,
      77.449% 85.975%,
      77.61% 84.345%,
      77.665% 82.627%,
      77.665% 61.441%,
      77.665% 61.441%,
      77.72% 59.722%,
      77.881% 58.092%,
      78.137% 56.573%,
      78.481% 55.184%,
      78.904% 53.95%,
      79.397% 52.891%,
      79.951% 52.03%,
      80.558% 51.388%,
      81.209% 50.986%,
      81.895% 50.847%,
      93.739% 50.847%,
      93.739% 50.847%,
      94.426% 50.709%,
      95.076% 50.307%,
      95.683% 49.665%,
      96.238% 48.804%,
      96.731% 47.745%,
      97.153% 46.51%,
      97.497% 45.122%,
      97.754% 43.602%,
      97.914% 41.973%,
      97.97% 40.254%,
      97.97% 10.593%,
      97.97% 10.593%,
      97.914% 8.875%,
      97.754% 7.245%,
      97.497% 5.725%,
      97.153% 4.337%,
      96.731% 3.103%,
      96.238% 2.044%,
      95.683% 1.182%,
      95.076% 0.54%,
      94.426% 0.139%,
      93.739% 0%,
      4.907% 0%
    );
  }
`;

export const AboutCardBg = styled.div`
  background: linear-gradient(to right,  rgba(0,255,56,0.9) 0%, rgba(0,255,56,0.6) 100%);
  z-index: 200;
  width: 590px;
  height: 237px;
  padding-left: 60px;
  padding-top: 40px;
  position: relative;
  & > p {
    font-size: 30px;
    color: #012444;
    width: 380px;
  }
  & > svg{
    position: absolute;
    top:5px;
    left:8px;
  }
`;

export const AboutCardShadow = styled.div`
  z-index: 1;
  background-color: rgba(1, 36, 68, 0.1);
  filter: blur(100px);
  width: 595px;
  height: 243px;
`;

export const AboutCardLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 100px;
  height: 80px;
  border-radius: 25px;
  background: linear-gradient(to right, rgba(0,255,56,0.7) 0%, rgba(0,255,56,0.6) 100%);
  box-shadow: 5px 5px 4px rgba(1, 36, 68, 0.1);
  color: var(--text-color);
  cursor: pointer;
`;