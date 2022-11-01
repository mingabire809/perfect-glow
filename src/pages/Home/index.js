import React, {useState} from "react";
import { Background, Button, Content, OptionButton,DescriptionContent, Wrapper, Options, ProductContent, Product, ProductBackground, Background2, Description, ImageContent, CategoryContent, Category, Inside, InsideBackground, NewCollection, ImageNew, LatestContent, Latest, LatestBackground, Touch, Input } from "./Home.styles";
import picture from '../../assets/images/background.jpg'
import Wig1 from '../../assets/images/wig1.jpg'
import Wig2 from '../../assets/images/wig2.jpg'
import Wig3 from '../../assets/images/wig3.jpg'
import Wig4 from '../../assets/images/wig4.jpg'
import Skin1 from '../../assets/images/skin1.jpg'
import Skin2 from '../../assets/images/skin2.jpg'
import Skin3 from '../../assets/images/skin3.jpg'
import Skin4 from '../../assets/images/skin4.jpg'
import Make1 from '../../assets/images/make1.jpg'
import Make2 from '../../assets/images/make2.jpg'
import Make3 from '../../assets/images/make3.jpg'
import Make4 from '../../assets/images/make4.jpg'
import picture2 from '../../assets/images/background2.jpg'
import MainText from '../../assets/images/main-text-decor.svg'
import Natural from '../../assets/images/natural.svg'
import Organic from '../../assets/images/organic.svg'
import Quality from '../../assets/images/quality.svg'
import Blog from '../../assets/images/blog-item-decor.png'
import Arrow from '../../assets/images/arrow-lg.svg'
import New from '../../assets/images/new.jpg'
import Arrow2 from '../../assets/images/arrow-md.svg'
import Video from '../../assets/images/video.png'
import Promotion from '../../assets/images/promotion.jpg'
import Play from '../../assets/images/play-btn.png'
import Latest1 from '../../assets/images/latest1.jpg'
import Latest2 from '../../assets/images/latest2.jpg'
import Subscribe from '../../assets/images/subscribe-img.svg'


const Home = () =>{
const [wigs, setWigs] = useState(true)
const [skincare, setSkinCare] = useState(false)
const [makeup, setMakeUp] = useState(false)
const [hover, setHover] = useState(false);
const [hover1, setHover1] = useState(false);
const [hover2, setHover2] = useState(false);

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
            >
                 <div style={{
                        marginTop: '10%',
                        marginLeft: 'auto',
                        width: '30%',
                        marginRight: '10%'
                    }}>
                    <h2 style={{
                        color: 'rgba(145,41,140,255)',
                        fontSize: 30
                    }}>Discount</h2>
                    <h1 style={{
                        fontSize: 80,
                        marginTop: -5,
                        marginBottom: -10
                    }}>Get Your <span style={{color: 'rgba(145,41,140,255)'}}>50% </span>Off</h1>
                    <div style={{width: '75%', fontSize: 18}}>
                    <h4>Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse</h4>
                    </div>
                    <Button>
                        GET NOW!
                    </Button>
                    </div>
            </Background2>
            <DescriptionContent>
                <Description>
                    
                    <ImageContent style={{
                        backgroundImage: `url(${MainText})`
                    }}>
                        <img src={Natural} width='90px' style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}/>
                    </ImageContent>
                    <h1 style={{textAlign: 'center'}}>Natural</h1>
                    <h4 style={{textAlign: 'center'}}>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</h4>
                </Description>
                <Description>
                    
                    <ImageContent style={{
                        backgroundImage: `url(${MainText})`
                    }}>
                        <img src={Quality} width='90px' style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}/>
                    </ImageContent>
                    <h1 style={{textAlign: 'center'}}>Quality</h1>
                    <h4 style={{textAlign: 'center'}}>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</h4>
                </Description>
                <Description>
                    
                    <ImageContent style={{
                        backgroundImage: `url(${MainText})`
                    }}>
                        <img src={Organic} width='90px' style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}/>
                    </ImageContent>
                    <h1 style={{textAlign: 'center'}}>Organic</h1>
                    <h4 style={{textAlign: 'center'}}>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</h4>
                </Description>
            </DescriptionContent>
            <h2 style={{color: 'rgba(145,41,140,255)', textAlign: 'center', marginTop: 100}}>Popular Collections</h2>
            <h1 style={{textAlign: 'center', fontSize: 40}}>Top Categories</h1>
            <div style={{
                width: '38%',
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: -25
            }}>
                <h3 style={{textAlign: 'center'}}>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</h3>
            </div>
            <CategoryContent>
                <Category 
                style={{
                    backgroundImage: `url(${Wig4})`
                }}
                >
                    <Inside 
                    onMouseEnter={()=> setHover(true)}
                    onMouseLeave={()=> setHover(false)}
                    >{hover ? <>
                    <InsideBackground style={{
                            backgroundImage: `url(${Blog})`,
                            
                        }}>
                            <h4 style={{
                                textAlign: 'center',
                                marginLeft: 14,
                                marginTop: 30}}>WIG</h4>
                        </InsideBackground>
                        <div style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 140
                    }}>
                            <h5 style={{ color: 'white', textAlign: 'center'}}>BROWSE PRODUCTS</h5>
                            <img src={Arrow} style={{
                                marginLeft: 30
                            }}/>
                        </div>
                    </>: null}
                        
                    </Inside>

                </Category>
                <Category 
                style={{
                    backgroundImage: `url(${Make4})`
                }}
                >
                    <Inside 
                    onMouseEnter={()=> setHover1(true)}
                    onMouseLeave={()=> setHover1(false)}
                    >
                        {hover1 ? <>
                    <InsideBackground style={{
                            backgroundImage: `url(${Blog})`,
                            
                        }}>
                            <h4 style={{
                                textAlign: 'center',
                                marginLeft: 14,
                                marginTop: 30}}>MAKEUP</h4>
                        </InsideBackground>
                        <div style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 140
                    }}>
                            <h5 style={{ color: 'white', textAlign: 'center'}}>BROWSE PRODUCTS</h5>
                            <img src={Arrow} style={{
                                marginLeft: 30
                            }}/>
                        </div>
                    </>: null}
                        </Inside>
                </Category>
                <Category 
                style={{
                    backgroundImage: `url(${Skin4})`
                }}
                >
                    <Inside
                    onMouseEnter={()=> setHover2(true)}
                    onMouseLeave={()=> setHover2(false)}
                    >
                        {hover2 ? <>
                    <InsideBackground style={{
                            backgroundImage: `url(${Blog})`,
                            
                        }}>
                            <h4 style={{
                                textAlign: 'center',
                                marginLeft: 14,
                                marginTop: 30}}>SKINCARE</h4>
                        </InsideBackground>
                        <div style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: 140
                    }}>
                            <h5 style={{ color: 'white', textAlign: 'center'}}>BROWSE PRODUCTS</h5>
                            <img src={Arrow} style={{
                                marginLeft: 30
                            }}/>
                        </div>
                    </>: null}
                        </Inside>
                </Category>
            </CategoryContent>
            <NewCollection>
                <ImageNew src={New}/>
                <div style={{
                    width: '50%',
                    height: '100%'
                }}>
                    <div style={{width: '70%', marginLeft: '13%',
                marginTop: '15%'}}>
                        <h2 style={{color: 'rgba(145,41,140,255)'}}>Check This Out</h2>
                        <h1 style={{fontSize: 45}}>New Collection For Delicate Skin</h1>
                        <h3>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</h3>
                        <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim.</p>
                        <Button>
                        SHOP NOW
                    </Button>
                    </div>
                </div>
            </NewCollection>
            <NewCollection>
            <div style={{
                    width: '50%',
                    height: '100%'
                }}>
                    <div style={{width: '70%', marginLeft: '13%',
                marginTop: '15%'}}>
                        <h2 style={{color: 'rgba(145,41,140,255)'}}>About Us</h2>
                        <h1 style={{fontSize: 45}}>Who We Are</h1>
                        <h3>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</h3>
                        <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim.</p>
                        <div style={{
                            display: 'flex',
                            alignItem: 'center',
                            justifyContent: 'space-between',
                            width: '70%'
                        }}>
                            <img src={Video} width='40px'/>
                            <h3>WATCH VIDEO ABOUT US</h3>
                            <img src={Arrow2} width='40px'/>
                        </div>
                    </div>
                </div>
                <div style={{width: '50%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundImage: `url(${Promotion})`
            }}>
                <div style={{
                    marginTop: '40%',
                    marginLeft: '43%',
                    width: '40%'
                }}>
                    <h3 style={{color: 'white'}}>PROMOTION VIDEO</h3>
                <img src={Play} style={{cursor: 'pointer'}}/>
                </div>
                
                </div>
            </NewCollection>
            <h2 style={{color: 'rgba(145,41,140,255)', textAlign: 'center', marginTop: 100}}>Cosmetics</h2>
            <h1 style={{textAlign: 'center', fontSize: 40}}>New Arrivals</h1>
            <div style={{
                width: '38%',
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: -25
            }}>
                <h3 style={{textAlign: 'center'}}>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</h3>
            </div>
            <ProductContent>
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
                                    backgroundImage: `url(${Make3})`
                                }}
                                >

                                </ProductBackground>
                                <h3 style={{textAlign: 'center'}}>Eye Lashes</h3>
                                <h3 style={{textAlign: 'center'}}>Kshs 1,500</h3>
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
            </ProductContent>
            <h2 style={{color: 'rgba(145,41,140,255)', textAlign: 'center', marginTop: 100}}>Our Blog</h2>
            <h1 style={{textAlign: 'center', fontSize: 40}}>The Latest News At BeShop</h1>
            <div style={{
                width: '38%',
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: -25
            }}>
                <h3 style={{textAlign: 'center'}}>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</h3>
            </div>
            <LatestContent>
                <Latest>
                    <LatestBackground style={{
                        backgroundImage: `url(${Latest1})`
                    }}>

                    </LatestBackground>
                    <h2>Perfumes, perfumed or eau de toilette?</h2>
                    <h4>Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.</h4>
                    <div style={{display: 'flex'}}>
                        <h4 style={{marginRight: 14}}>READ MORE</h4>
                        <img src={Arrow2} width='40px'/>    
                    </div>
                </Latest>
                <Latest>
                    <LatestBackground style={{
                        backgroundImage: `url(${Latest2})`
                    }}>

                    </LatestBackground>
                    <h2>Best multi-step skin care treatment</h2>
                    <h4>Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.</h4>
                    <div style={{display: 'flex'}}>
                        <h4 style={{marginRight: 14}}>READ MORE</h4>
                        <img src={Arrow2} width='40px'/>    
                    </div>
                </Latest>
            </LatestContent>
            <Button style={{
                marginTop: 10,
                marginLeft: '45%',
                marginBottom: 50
            }}>
                        READ BLOG
                    </Button>

                    <Touch>
                        <img src={Subscribe}/>
                        <div>
                            <h1>Stay In Touch</h1>
                            <h3>Nourish your skin with toxin-free cosmetic roducts.</h3>
                            <div style={{display: 'flex'}}>
                                <Input placeholder="Enter your email" type="email"/>
                                <Button>SUBSCRIBE</Button>
                            </div>
                        </div>
                    </Touch>
            </Content>
        </Wrapper>
    )
}

export default Home;