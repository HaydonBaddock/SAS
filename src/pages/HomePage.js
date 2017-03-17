import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import { Parallax, Background } from 'react-parallax'

import Blurb from '../components/Blurb'
import Details from '../components/Details'
import PageLinks from '../components/PageLinks'
import Footer from '../components/Footer'

class HomePage extends Component {
	render() {

		function Banner() {
			const styles = {
				carouselItem: {
						width: '100%',
						height: '750px',
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						opacity: '0.5'
				}
			}
			return (
				<Carousel indicators={false} arrows={false} style={{width:'1920px'}}>
					<Carousel.Item alt='Automotive'>
						<div style={{...styles.carouselItem, backgroundImage:'url('+require('../images/car.jpg')+')'}} />
					</Carousel.Item>
					<Carousel.Item alt='Aircraft'>
						<div style={{...styles.carouselItem, backgroundImage:'url('+require('../images/plane.jpg')+')'}} />
					</Carousel.Item>
					<Carousel.Item alt='Jet Boats'>
						<div style={{...styles.carouselItem, backgroundImage:'url('+require('../images/boat.jpg')+')'}} />
					</Carousel.Item>
				</Carousel>
			)
		}

		const Logo = () => (
			<img src={require('../images/logo_large.png')} alt='Specialised Auto Services' style={{
				position: 'absolute',
				marginLeft: 'auto',
				marginRight: 'auto',
				left: '0',
				right: '0',
				top: '-700px',
				width: '80%',
				maxWidth: '1030px'
			}}/>
		)

		const Bar = () => (
			<div style={{
				height: '20px',
				backgroundColor: '#555'
			}} />
		)

		const Separator = () => (
			<div style={{
				height: '2px',
				backgroundColor: '#D91F26'
			}} />
		)

		return (
			<div style={{width:'100%', backgroundColor:'#000'}}>
				<Parallax strength={300}>

					<Background>
							<Banner />
					</Background>

					<div style={{marginTop:'750px', backgroundColor:'#111'}}>

						<Logo />

						<div style={{width:'100%'}}>
							<Bar />
						</div>

						<div className='row center-block' style={{width:'80%', maxWidth:'1030px', padding:'50px'}}>
							<Blurb />
						</div>

						<div className='row center-block' style={{width:'80%', maxWidth:'1030px'}}>
							<Separator />
						</div>

						<div className='row center-block' style={{width:'80%', maxWidth:'1030px'}}>
							<PageLinks />
						</div>

						<div className='row center-block' style={{width:'80%', maxWidth:'1030px'}}>
							<Separator />
						</div>

						<div className='row center-block' style={{width:'80%', maxWidth:'1030px'}}>
							<Details />
						</div>

						<Footer />

					</div>

				</Parallax>
			</div>
		)
	}
}

export default HomePage
