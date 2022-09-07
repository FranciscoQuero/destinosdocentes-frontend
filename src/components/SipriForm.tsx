import React, {Component, SyntheticEvent} from "react";
import {Autocomplete, Button, Box, TextField, Snackbar, IconButton} from '@mui/material';
import DestinationsDataGrid from "./DestinationsDataGrid";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

export default class SipriForm extends Component {
    state = {
        town: '',
        sipriTowns: [],
        shouldRenderForm: true,
        shouldOpenSnackbar: false,
    };

    _handleTownChange = (event: SyntheticEvent, value: string | null) => {
        this.setState({town: value})
    };

    handleSliderChange = (value: number) => {
        this.setState({limit: value})
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.state.town !== '') {
            this.setState({shouldRenderForm: false});
        } else {
            this.setState({shouldOpenSnackbar: true});
        }
    };

    _handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({shouldRenderForm: true});
    };

    _renderMultipleTextInput() {
        const allTowns = this._getAllTowns();
        return (
            <Autocomplete
                multiple
                sx={{width: 300}}
                options={allTowns}
                filterSelectedOptions
                onChange={(event: React.SyntheticEvent, newInputValues: string[]) => {
                    this.setState({sipriTowns: newInputValues});
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        required
                        fullWidth
                        id="town"
                        label="Introduce los destinos de Sipri"
                        size='small'
                        name='town'
                    />
                )}
            />
        )
    }

    _renderTextInput() {
        const allTowns = this._getAllTowns();
        return (
            <Autocomplete
                options={allTowns}
                sx={{width: 300}}
                autoHighlight
                onInputChange={(event, newInputValue) => {
                    this.setState({town: newInputValue});
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        margin="normal"
                        required
                        fullWidth
                        id="town"
                        label="Introduce tu localidad"
                        size='small'
                        name='town'
                    />
                )}
                onChange={this._handleTownChange}
            />
        );
    }

    _getAllTowns() {
        return ['Abla', 'Abrucena', 'Adra', 'Albánchez', 'Alboloduy', 'Albox', 'Alcolea', 'Alcóntar', 'Alcudia de Monteagud', 'Alhabia', 'Alhama de Almería', 'Alicún', 'Almería', 'Almócita', 'Alsodux', 'Antas', 'Arboleas', 'Armuña de Almanzora', 'Bacares', 'Bayárcal', 'Bayarque', 'Bédar', 'Beires', 'Benahadux', 'Benitagla', 'Benizalón', 'Bentarique', 'Berja', 'Canjáyar', 'Cantoria', 'Carboneras', 'Castro de Filabres', 'Chercos', 'Chirivel', 'Cóbdar', 'Cuevas del Almanzora', 'Dalías', 'Ejido (El)', 'Enix', 'Felix', 'Fiñana', 'Fines', 'Fondón', 'Gádor', 'Gallardos (Los)', 'Garrucha', 'Gérgal', 'Huécija', 'Huércal-Overa', 'Huércal de Almería', 'Illar', 'Instinción', 'Laroya', 'Láujar de Andarax', 'Líjar', 'Lubrín', 'Lucainena de las Torres', 'Lúcar', 'Macael', 'María', 'Mojácar', 'Mojonera (La)', 'Nacimiento', 'Níjar', 'Ohanes', 'Olula de Castro', 'Olula del Río', 'Oria', 'Padules', 'Partaloa', 'Paterna del Río', 'Pechina', 'Pulpí', 'Purchena', 'Rágol', 'Rioja', 'Roquetas de Mar', 'Santa Cruz de Marchena', 'Santa Fe de Mondújar', 'Senés', 'Serón', 'Sierro', 'Somontín', 'Sorbas', 'Suflí', 'Tabernas', 'Taberno', 'Tahal', 'Terque', 'Tíjola', 'Tres Villas (Las)', 'Turre', 'Turrillas', 'Uleila del Campo', 'Urrácal', 'Velefique', 'Vélez-Blanco', 'Vélez-Rubio', 'Vera', 'Viator', 'Vícar', 'Zurgena', 'Alcalá de los Gazules', 'Alcalá del Valle', 'Algar', 'Algeciras', 'Algodonales', 'Arcos de la Frontera', 'Barbate', 'Barrios (Los)', 'Benalup-Casas Viejas', 'Benaocaz', 'Bornos', 'Bosque (El)', 'Cádiz', 'Castellar de la Frontera', 'Chiclana de la Frontera', 'Chipiona', 'Conil de la Frontera', 'Espera', 'Gastor (El)', 'Grazalema', 'Jerez de la Frontera', 'Jimena de la Frontera', 'Línea de la Concepción (La)', 'Medina-Sidonia', 'Olvera', 'Paterna de Rivera', 'Prado del Rey', 'Puerto de Santa María (El)', 'Puerto Real', 'Puerto Serrano', 'Rota', 'San Fernando', 'San José del Valle', 'San Roque', 'Sanlúcar de Barrameda', 'Setenil de las Bodegas', 'Tarifa', 'Torre Alháquime', 'Trebujena', 'Ubrique', 'Vejer de la Frontera', 'Villaluenga del Rosario', 'Villamartín', 'Zahara', 'Adamuz', 'Aguilar de la Frontera', 'Alcaracejos', 'Almedinilla', 'Almodóvar del Río', 'Añora', 'Baena', 'Belalcázar', 'Belmez', 'Benamejí', 'Blázquez (Los)', 'Bujalance', 'Cabra', 'Cañete de las Torres', 'Carcabuey', 'Cardeña', 'Carlota (La)', 'Carpio (El)', 'Castro del Río', 'Conquista', 'Córdoba', 'Doña Mencía', 'Dos Torres', 'Encinas Reales', 'Espejo', 'Espiel', 'Fernán-Núñez', 'Fuente-Tójar', 'Fuente la Lancha', 'Fuente Obejuna', 'Fuente Palmera', 'Granjuela (La)', 'Guadalcázar', 'Guijo (El)', 'Hinojosa del Duque', 'Hornachuelos', 'Iznájar', 'Lucena', 'Luque', 'Montalbán de Córdoba', 'Montemayor', 'Montilla', 'Montoro', 'Monturque', 'Moriles', 'Nueva Carteya', 'Obejo', 'Palenciana', 'Palma del Río', 'Pedro Abad', 'Pedroche', 'Peñarroya-Pueblonuevo', 'Posadas', 'Pozoblanco', 'Priego de Córdoba', 'Puente Genil', 'Rambla (La)', 'Rute', 'San Sebastián de los Ballesteros', 'Santa Eufemia', 'Santaella', 'Torrecampo', 'Valenzuela', 'Valsequillo', 'Victoria (La)', 'Villa del Río', 'Villafranca de Córdoba', 'Villaharta', 'Villanueva de Córdoba', 'Villanueva del Duque', 'Villanueva del Rey', 'Villaralto', 'Villaviciosa de Córdoba', 'Viso (El)', 'Zuheros', 'Agrón', 'Alamedilla', 'Albolote', 'Albondón', 'Albuñán', 'Albuñol', 'Albuñuelas', 'Aldeire', 'Alfacar', 'Algarinejo', 'Alhama de Granada', 'Alhendín', 'Alicún de Ortega', 'Almegíjar', 'Almuñécar', 'Alpujarra de la Sierra', 'Alquife', 'Arenas del Rey', 'Armilla', 'Atarfe', 'Baza', 'Beas de Granada', 'Beas de Guadix', 'Benalúa', 'Benalúa de las Villas', 'Benamaurel', 'Bérchules', 'Bubión', 'Busquístar', 'Cacín', 'Cádiar', 'Cájar', 'Calahorra (La)', 'Calicasas', 'Campotéjar', 'Cáñar', 'Caniles', 'Capileira', 'Carataunas', 'Cástaras', 'Castilléjar', 'Castril', 'Cenes de la Vega', 'Chauchina', 'Chimeneas', 'Churriana de la Vega', 'Cijuela', 'Cogollos de Guadix', 'Cogollos de la Vega', 'Colomera', 'Cortes de Baza', 'Cortes y Graena', 'Cuevas del Campo', 'Cúllar', 'Cúllar Vega', 'Darro', 'Dehesas de Guadix', 'Deifontes', 'Diezma', 'Dílar', 'Dólar', 'Dúdar', 'Dúrcal', 'Escúzar', 'Ferreira', 'Fonelas', 'Freila', 'Fuente Vaqueros', 'Gabias (Las)', 'Galera', 'Gobernador', 'Gójar', 'Gor', 'Gorafe', 'Granada', 'Guadahortuna', 'Guadix', 'Guajares (Los)', 'Gualchos', 'Güejar Sierra', 'Güevéjar', 'Huélago', 'Huéneja', 'Huéscar', 'Huétor de Santillán', 'Huétor Tájar', 'Huétor Vega', 'Illora', 'Itrabo', 'Iznalloz', 'Jayena', 'Jerez del Marquesado', 'Jete', 'Jun', 'Juviles', 'Láchar', 'Lanjarón', 'Lanteira', 'Lecrín', 'Lentegí', 'Lobras', 'Loja', 'Lugros', 'Lújar', 'Malahá (La)', 'Maracena', 'Marchal', 'Moclín', 'Molvízar', 'Monachil', 'Montefrío', 'Montejícar', 'Montillana', 'Moraleda de Zafayona', 'Morelábor', 'Motril', 'Murtas', 'Nevada', 'Nigüelas', 'Nívar', 'Ogíjares', 'Orce', 'Órgiva', 'Otívar', 'Otura', 'Padul', 'Pampaneira', 'Pedro Martínez', 'Peligros', 'Peza (La)', 'Píñar', 'Pinar (El)', 'Pinos Genil', 'Pinos Puente', 'Polícar', 'Polopos', 'Pórtugos', 'Puebla de Don Fadrique', 'Pulianas', 'Purullena', 'Quéntar', 'Rubite', 'Salar', 'Salobreña', 'Santa Cruz del Comercio', 'Santa Fe', 'Soportújar', 'Sorvilán', 'Taha (La)', 'Torre-Cardela', 'Torvizcón', 'Trevélez', 'Turón', 'Ugíjar', 'Valle (El)', 'Valle del Zalabí', 'Válor', 'Vegas del Genil', 'Vélez de Benaudalla', 'Ventas de Huelma', 'Villamena', 'Villanueva de las Torres', 'Villanueva Mesía', 'Víznar', 'Zafarraya', 'Zagra', 'Zubia (La)', 'Zújar', 'Alájar', 'Aljaraque', 'Almendro (El)', 'Almonaster la Real', 'Almonte', 'Alosno', 'Aracena', 'Aroche', 'Arroyomolinos de León', 'Ayamonte', 'Beas', 'Berrocal', 'Bollullos Par del Condado', 'Bonares', 'Cabezas Rubias', 'Cala', 'Calañas', 'Campillo (El)', 'Campofrío', 'Cañaveral de León', 'Cartaya', 'Castaño del Robledo', 'Cerro de Andévalo (El)', 'Chucena', 'Corteconcepción', 'Cortegana', 'Cortelazor', 'Cumbres de Enmedio', 'Cumbres de San Bartolomé', 'Cumbres Mayores', 'Encinasola', 'Escacena del Campo', 'Fuenteheridos', 'Galaroza', 'Gibraleón', 'Granada de Río-Tinto (La)', 'Granado (El)', 'Higuera de la Sierra', 'Hinojales', 'Hinojos', 'Huelva', 'Isla Cristina', 'Jabugo', 'Lepe', 'Linares de la Sierra', 'Lucena del Puerto', 'Manzanilla', 'Marines (Los)', 'Minas de Riotinto', 'Moguer', 'Nava (La)', 'Nerva', 'Niebla', 'Palma del Condado (La)', 'Palos de la Frontera', 'Paterna del Campo', 'Paymogo', 'Puebla de Guzmán', 'Puerto Moral', 'Punta Umbría', 'Rociana del Condado', 'Rosal de la Frontera', 'San Bartolomé de la Torre', 'San Juan del Puerto', 'San Silvestre de Guzmán', 'Sanlúcar de Guadiana', 'Santa Ana la Real', 'Santa Bárbara de Casa', 'Santa Olalla del Cala', 'Trigueros', 'Valdelarco', 'Valverde del Camino', 'Villablanca', 'Villalba del Alcor', 'Villanueva de las Cruces', 'Villanueva de los Castillejos', 'Villarrasa', 'Zalamea la Real', 'Zufre', 'Albanchez de Mágina', 'Alcalá la Real', 'Alcaudete', 'Aldeaquemada', 'Andújar', 'Arjona', 'Arjonilla', 'Arquillos', 'Arroyo del Ojanco', 'Baeza', 'Bailén', 'Baños de la Encina', 'Beas de Segura', 'Bedmar y Garcíez', 'Begíjar', 'Bélmez de la Moraleda', 'Benatae', 'Cabra del Santo Cristo', 'Cambil', 'Campillo de Arenas', 'Canena', 'Carboneros', 'Cárcheles', 'Carolina (La)', 'Castellar', 'Castillo de Locubín', 'Cazalilla', 'Cazorla', 'Chiclana de Segura', 'Chilluévar', 'Escañuela', 'Espelúy', 'Frailes', 'Fuensanta de Martos', 'Fuerte del Rey', 'Génave', 'Guardia de Jaén (La)', 'Guarromán', 'Higuera de Calatrava', 'Hinojares', 'Hornos', 'Huelma', 'Huesa', 'Ibros', 'Iruela (La)', 'Iznatoraf', 'Jabalquinto', 'Jaén', 'Jamilena', 'Jimena', 'Jódar', 'Lahiguera', 'Larva', 'Linares', 'Lopera', 'Lupión', 'Mancha Real', 'Marmolejo', 'Martos', 'Mengíbar', 'Montizón', 'Navas de San Juan', 'Noalejo', 'Orcera', 'Peal de Becerro', 'Pegalajar', 'Porcuna', 'Pozo Alcón', 'Puente de Génave', 'Puerta de Segura (La)', 'Quesada', 'Rus', 'Sabiote', 'Santa Elena', 'Santiago-Pontones', 'Santiago de Calatrava', 'Santisteban del Puerto', 'Santo Tomé', 'Segura de la Sierra', 'Siles', 'Sorihuela del Guadalimar', 'Torre del Campo', 'Torreblascopedro', 'Torredonjimeno', 'Torreperogil', 'Torres', 'Torres de Albánchez', 'Úbeda', 'Valdepeñas de Jaén', 'Vilches', 'Villacarrillo', 'Villanueva de la Reina', 'Villanueva del Arzobispo', 'Villardompardo', 'Villares (Los)', 'Villarrodrigo', 'Villatorres', 'Alameda', 'Alcaucín', 'Alfarnate', 'Alfarnatejo', 'Algarrobo', 'Algatocín', 'Alhaurín de la Torre', 'Alhaurín el Grande', 'Almáchar', 'Almargen', 'Almogía', 'Álora', 'Alozaina', 'Alpandeire', 'Antequera', 'Árchez', 'Archidona', 'Ardales', 'Arenas', 'Arriate', 'Atajate', 'Benadalid', 'Benahavís', 'Benalauría', 'Benalmádena', 'Benamargosa', 'Benamocarra', 'Benaoján', 'Benarrabá', 'Borge (El)', 'Burgo (El)', 'Campillos', 'Cañete la Real', 'Canillas de Aceituno', 'Canillas de Albaida', 'Carratraca', 'Cartajima', 'Cártama', 'Casabermeja', 'Casarabonela', 'Casares', 'Coín', 'Colmenar', 'Comares', 'Cómpeta', 'Cortes de la Frontera', 'Cuevas Bajas', 'Cuevas de San Marcos', 'Cuevas del Becerro', 'Cútar', 'Estepona', 'Faraján', 'Frigiliana', 'Fuengirola', 'Fuente de Piedra', 'Gaucín', 'Genalguacil', 'Guaro', 'Humilladero', 'Igualeja', 'Istán', 'Iznate', 'Jimera de Líbar', 'Jubrique', 'Júzcar', 'Macharaviaya', 'Málaga', 'Manilva', 'Marbella', 'Mijas', 'Moclinejo', 'Mollina', 'Monda', 'Montejaque', 'Nerja', 'Ojén', 'Parauta', 'Periana', 'Pizarra', 'Pujerra', 'Rincón de la Victoria', 'Riogordo', 'Ronda', 'Salares', 'Sayalonga', 'Sedella', 'Sierra de Yeguas', 'Teba', 'Tolox', 'Torremolinos', 'Torrox', 'Totalán', 'Valle de Abdalajís', 'Vélez-Málaga', 'Villanueva de Algaidas', 'Villanueva de Tapia', 'Villanueva del Rosario', 'Villanueva del Trabuco', 'Viñuela', 'Yunquera', 'Aguadulce', 'Alanís', 'Albaida del Aljarafe', 'Alcalá de Guadaíra', 'Alcalá del Río', 'Alcolea del Río', 'Algaba (La)', 'Algámitas', 'Almadén de la Plata', 'Almensilla', 'Arahal', 'Aznalcázar', 'Aznalcóllar', 'Badolatosa', 'Benacazón', 'Bollullos de la Mitación', 'Bormujos', 'Brenes', 'Burguillos', 'Cabezas de San Juan (Las)', 'Camas', 'Campana (La)', 'Cañada Rosal', 'Cantillana', 'Carmona', 'Carrión de los Céspedes', 'Casariche', 'Castilblanco de los Arroyos', 'Castilleja de Guzmán', 'Castilleja de la Cuesta', 'Castilleja del Campo', 'Castillo de las Guardas (El)', 'Cazalla de la Sierra', 'Constantina', 'Coria del Río', 'Coripe', 'Coronil (El)', 'Corrales (Los)', 'Cuervo de Sevilla (El)', 'Dos Hermanas', 'Écija', 'Espartinas', 'Estepa', 'Fuentes de Andalucía', 'Garrobo (El)', 'Gelves', 'Gerena', 'Gilena', 'Gines', 'Guadalcanal', 'Guillena', 'Herrera', 'Huévar del Aljarafe', 'Isla Mayor', 'Lantejuela (La)', 'Lebrija', 'Lora de Estepa', 'Lora del Río', 'Luisiana (La)', 'Madroño (El)', 'Mairena del Alcor', 'Mairena del Aljarafe', 'Marchena', 'Marinaleda', 'Martín de la Jara', 'Molares (Los)', 'Montellano', 'Morón de la Frontera', 'Navas de la Concepción (Las)', 'Olivares', 'Osuna', 'Palacios y Villafranca (Los)', 'Palomares del Río', 'Paradas', 'Pedrera', 'Pedroso (El)', 'Peñaflor', 'Pilas', 'Pruna', 'Puebla de Cazalla (La)', 'Puebla de los Infantes (La)', 'Puebla del Río (La)', 'Real de la Jara (El)', 'Rinconada (La)', 'Roda de Andalucía (La)', 'Ronquillo (El)', 'Rubio (El)', 'Salteras', 'San Juan de Aznalfarache', 'San Nicolás del Puerto', 'Sanlúcar la Mayor', 'Santiponce', 'Saucejo (El)', 'Sevilla', 'Tocina', 'Tomares', 'Umbrete', 'Utrera', 'Valencina de la Concepción', 'Villamanrique de la Condesa', 'Villanueva de San Juan', 'Villanueva del Ariscal', 'Villanueva del Río y Minas', 'Villaverde del Río', 'Viso del Alcor (El)']
    }

    _renderSubmitButton() {
        return (
            <Button
                type="submit"
                style={{marginLeft: "auto"}}
                variant="contained"
                size="large"
                color="primary"
                fullWidth={true}
            >
                Buscar
            </Button>
        );
    }

    _renderSnackbar() {
        const action = (
            <React.Fragment>
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={() => {
                        this.setState({shouldOpenSnackbar: false});
                    }}
                >
                    <CloseIcon fontSize="small"/>
                </IconButton>
            </React.Fragment>
        );

        return (
            <Snackbar
                open={this.state.shouldOpenSnackbar}
                autoHideDuration={5000}
                onClose={() => {
                    this.setState({shouldOpenSnackbar: false});
                }}
                message="Por favor, rellena todos los campos."
                action={action}
            />
        );
    }

    _renderBackButton() {
        return (
            <Button
                style={{marginLeft: "auto", flexGrow: 1}}
                variant="contained"
                size="medium"
                color="secondary"
                onClick={this._handleBack}
            >
                Atrás
            </Button>
        )
    }

    render() {
        if (this.state.shouldRenderForm) {
            return (
                <>
                <Typography component={'span'} variant="h5">
                    Introduce los destinos de tu convocatoria Sipri y los ordenamos por ti
                </Typography>
                <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                    {this._renderMultipleTextInput()}
                    {this._renderTextInput()}
                    {this._renderSubmitButton()}
                    {this._renderSnackbar()}
                </Box>
                </>
            );
        } else {
            return (
                <>
                    <Typography component="h1" variant="h5">
                        Estos son los mejores destinos si vives en {this.state.town}:
                    </Typography>
                    <DestinationsDataGrid fromTown={this.state.town} townsArray={this.state.sipriTowns}/>
                    {this._renderBackButton()}
                </>
            );
        }
    }

}
