import React, {useState} from "react";
import { Background, Button, Content, OptionButton, Wrapper, Options, ProductContent, Product, ProductBackground, Background2 } from "./Home.styles";
import picture from '../../assets/images/background.jpg'
import Wig1 from '../../assets/images/wig1.jpg'
import Wig2 from '../../assets/images/wig2.jpg'
import Wig3 from '../../assets/images/wig3.jpg'
import Skin1 from '../../assets/images/skin1.jpg'
import Skin2 from '../../assets/images/skin2.jpg'
import Skin3 from '../../assets/images/skin3.jpg'
import Make1 from '../../assets/images/make1.jpg'
import Make2 from '../../assets/images/make2.jpg'
import Make3 from '../../assets/images/make3.jpg'
import picture2 from '../../assets/images/background2.jpg'

const Home = () =>{
const [wigs, setWigs] = useState(true)
const [skincare, setSkinCare] = useState(false)
const [makeup, setMakeUp] = useState(false)

const makeWigs = ()=>{
    setWigs(true)
    setSkinCare(false)
    setMakeUp(false)
}
const makeSkinCare = ()=>{
    setWigs(false)
    setSkinCare(true)
    setMakeUp(false)
}
const makeMakeUp = ()=>{
    setWigs(false)
    setSkinCare(false)
    setMakeUp(true)
}
    return(
        <Wrapper>
            <Content>
                <Background style={{
                    backgroundImage: `url(${picture})`
                }}>
                    <div style={{
                        marginTop: '10%',
                        marginLeft: '10%'
                    }}>
                    <h2 style={{
                        color: 'rgba(145,41,140,255)'
                    }}>Professional</h2>
                    <h1 style={{
                        fontSize: 70,
                        marginTop: -5,
                        marginBottom: -10
                    }}>Beauty & Care</h1>
                    <div style={{width: '55%'}}>
                    <h4>Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse</h4>
                    </div>
                    <Button>
                        SHOP NOW
                    </Button>
                    </div>
                    

                </Background>
                <h3 style={{
                    textAlign: 'center'
                }}>Cosmetics</h3>
                <h2 style={{
                    textAlign: 'center'
                }}>Trending Products</h2>
                <div style={{
                    marginLeft: '36vw',
                    width: '30%'
                }}>
                <h4 style={{
                    textAlign: 'center'
                }}>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</h4>
                </div>
                <Options>
                    <OptionButton onClick={makeWigs} style={{
                        backgroundColor: wigs ? 'rgba(145,41,140,255)': '',
                        color: wigs ? 'white': ''
                    }}>
                        WIGS
                    </OptionButton>
                    <OptionButton onClick={makeMakeUp} style={{
                        backgroundColor: makeup ? 'rgba(145,41,140,255)': '',
                        color: makeup ? 'white': ''
                    }}>MAKE UP</OptionButton>
                    <OptionButton onClick={makeSkinCare} 
                    style={{
                        backgroundColor: skincare ? 'rgba(145,41,140,255)': '',
                        color: skincare ? 'white': ''
                    }}
                    >SKIN CARE</OptionButton>
                    
                </Options>
                {wigs ? <ProductContent>
                            <Product>
                                <ProductBackground
                                style={{
                                    backgroundImage: `url(${Wig1})`
                                }}
                                >
                                   
                                </ProductBackground>
                                <h3 style={{textAlign: 'center'}}>10 inch water wave wig</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 14,000</h3>
                            </Product>
                            <Product>
                                <ProductBackground
                                style={{
                                    backgroundImage: `url(${Wig2})`
                                }}
                                >

                                </ProductBackground>
                                <h3 style={{textAlign: 'center'}}>14 inch water wave wig</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 18,000</h3>
                            </Product>
                            <Product>
                                <ProductBackground
                                style={{
                                    backgroundImage: `url(${Wig3})`
                                }}
                                >

                                </ProductBackground>
                                <h3 style={{textAlign: 'center'}}>16 inch Water wave wig available</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 20,000</h3>
                            </Product>
                    </ProductContent>:null}
                    {makeup? <ProductContent>
                            <Product>
                                <ProductBackground
                                style={{
                                    backgroundImage: `url(${Make1})`
                                }}
                                >

                                </ProductBackground>
                                <h3 style={{textAlign: 'center'}}>Rechargeable eyebrow trimmer</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 999</h3>
                            </Product>
                            <Product>
                                <ProductBackground
                                style={{
                                    backgroundImage: `url(${Make2})`
                                }}
                                >

                                </ProductBackground>
                                <h3 style={{textAlign: 'center'}}>Eye Lashes</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 1,200</h3>
                            </Product>
                            <Product>
                                <ProductBackground
                                style={{
                                    backgroundImage: `url(${Make3})`
                                }}
                                >

                                </ProductBackground>
                                <h3 style={{textAlign: 'center'}}>Eye Lashes</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 1,500</h3>
                            </Product>
                    </ProductContent>: null}
                    {skincare? 
                    <ProductContent>
                    <Product>
                        <ProductBackground
                        style={{
                            backgroundImage: `url(${Skin1})`
                        }}
                        >

                        </ProductBackground>
                        <h3 style={{textAlign: 'center'}}>Palmer's</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 1,550</h3>
                    </Product>
                    <Product>
                        <ProductBackground
                        style={{
                            backgroundImage: `url(${Skin2})`
                        }}
                        >

                        </ProductBackground>
                        <h3 style={{textAlign: 'center'}}>Panoxyl</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 2,500</h3>
                    </Product>
                    <Product>
                        <ProductBackground
                        style={{
                            backgroundImage: `url(${Skin3})`
                        }}
                        >

                        </ProductBackground>
                        <h3 style={{textAlign: 'center'}}>Cerave</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 2,500</h3>
                    </Product>
            </ProductContent>:null}
            <Background2
            style={{backgroundImage: `url(${picture2})`}}
            ></Background2>
            </Content>
        </Wrapper>
    )
}

export default Home;