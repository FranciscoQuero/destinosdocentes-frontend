import React, {Component, SyntheticEvent} from "react";
import {Autocomplete, Button, Box, TextField, Snackbar, IconButton} from '@mui/material';
import DestinationsDataGrid from "./DestinationsDataGrid";
import DestinationsNumberSlider from "./DestinationsNumberSlider";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

export default class SearchDestinationForm extends Component {
    state = {
        town: '',
        limit: 300,
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
                            autoFocus
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
        return ['Abla', 'Abrucena', 'Adra', 'Alb??nchez', 'Alboloduy', 'Albox', 'Alcolea', 'Alc??ntar', 'Alcudia de Monteagud', 'Alhabia', 'Alhama de Almer??a', 'Alic??n', 'Almer??a', 'Alm??cita', 'Alsodux', 'Antas', 'Arboleas', 'Armu??a de Almanzora', 'Bacares', 'Bay??rcal', 'Bayarque', 'B??dar', 'Beires', 'Benahadux', 'Benitagla', 'Benizal??n', 'Bentarique', 'Berja', 'Canj??yar', 'Cantoria', 'Carboneras', 'Castro de Filabres', 'Chercos', 'Chirivel', 'C??bdar', 'Cuevas del Almanzora', 'Dal??as', 'Ejido (El)', 'Enix', 'Felix', 'Fi??ana', 'Fines', 'Fond??n', 'G??dor', 'Gallardos (Los)', 'Garrucha', 'G??rgal', 'Hu??cija', 'Hu??rcal-Overa', 'Hu??rcal de Almer??a', 'Illar', 'Instinci??n', 'Laroya', 'L??ujar de Andarax', 'L??jar', 'Lubr??n', 'Lucainena de las Torres', 'L??car', 'Macael', 'Mar??a', 'Moj??car', 'Mojonera (La)', 'Nacimiento', 'N??jar', 'Ohanes', 'Olula de Castro', 'Olula del R??o', 'Oria', 'Padules', 'Partaloa', 'Paterna del R??o', 'Pechina', 'Pulp??', 'Purchena', 'R??gol', 'Rioja', 'Roquetas de Mar', 'Santa Cruz de Marchena', 'Santa Fe de Mond??jar', 'Sen??s', 'Ser??n', 'Sierro', 'Somont??n', 'Sorbas', 'Sufl??', 'Tabernas', 'Taberno', 'Tahal', 'Terque', 'T??jola', 'Tres Villas (Las)', 'Turre', 'Turrillas', 'Uleila del Campo', 'Urr??cal', 'Velefique', 'V??lez-Blanco', 'V??lez-Rubio', 'Vera', 'Viator', 'V??car', 'Zurgena', 'Alcal?? de los Gazules', 'Alcal?? del Valle', 'Algar', 'Algeciras', 'Algodonales', 'Arcos de la Frontera', 'Barbate', 'Barrios (Los)', 'Benalup-Casas Viejas', 'Benaocaz', 'Bornos', 'Bosque (El)', 'C??diz', 'Castellar de la Frontera', 'Chiclana de la Frontera', 'Chipiona', 'Conil de la Frontera', 'Espera', 'Gastor (El)', 'Grazalema', 'Jerez de la Frontera', 'Jimena de la Frontera', 'L??nea de la Concepci??n (La)', 'Medina-Sidonia', 'Olvera', 'Paterna de Rivera', 'Prado del Rey', 'Puerto de Santa Mar??a (El)', 'Puerto Real', 'Puerto Serrano', 'Rota', 'San Fernando', 'San Jos?? del Valle', 'San Roque', 'Sanl??car de Barrameda', 'Setenil de las Bodegas', 'Tarifa', 'Torre Alh??quime', 'Trebujena', 'Ubrique', 'Vejer de la Frontera', 'Villaluenga del Rosario', 'Villamart??n', 'Zahara', 'Adamuz', 'Aguilar de la Frontera', 'Alcaracejos', 'Almedinilla', 'Almod??var del R??o', 'A??ora', 'Baena', 'Belalc??zar', 'Belmez', 'Benamej??', 'Bl??zquez (Los)', 'Bujalance', 'Cabra', 'Ca??ete de las Torres', 'Carcabuey', 'Carde??a', 'Carlota (La)', 'Carpio (El)', 'Castro del R??o', 'Conquista', 'C??rdoba', 'Do??a Menc??a', 'Dos Torres', 'Encinas Reales', 'Espejo', 'Espiel', 'Fern??n-N????ez', 'Fuente-T??jar', 'Fuente la Lancha', 'Fuente Obejuna', 'Fuente Palmera', 'Granjuela (La)', 'Guadalc??zar', 'Guijo (El)', 'Hinojosa del Duque', 'Hornachuelos', 'Izn??jar', 'Lucena', 'Luque', 'Montalb??n de C??rdoba', 'Montemayor', 'Montilla', 'Montoro', 'Monturque', 'Moriles', 'Nueva Carteya', 'Obejo', 'Palenciana', 'Palma del R??o', 'Pedro Abad', 'Pedroche', 'Pe??arroya-Pueblonuevo', 'Posadas', 'Pozoblanco', 'Priego de C??rdoba', 'Puente Genil', 'Rambla (La)', 'Rute', 'San Sebasti??n de los Ballesteros', 'Santa Eufemia', 'Santaella', 'Torrecampo', 'Valenzuela', 'Valsequillo', 'Victoria (La)', 'Villa del R??o', 'Villafranca de C??rdoba', 'Villaharta', 'Villanueva de C??rdoba', 'Villanueva del Duque', 'Villanueva del Rey', 'Villaralto', 'Villaviciosa de C??rdoba', 'Viso (El)', 'Zuheros', 'Agr??n', 'Alamedilla', 'Albolote', 'Albond??n', 'Albu????n', 'Albu??ol', 'Albu??uelas', 'Aldeire', 'Alfacar', 'Algarinejo', 'Alhama de Granada', 'Alhend??n', 'Alic??n de Ortega', 'Almeg??jar', 'Almu????car', 'Alpujarra de la Sierra', 'Alquife', 'Arenas del Rey', 'Armilla', 'Atarfe', 'Baza', 'Beas de Granada', 'Beas de Guadix', 'Benal??a', 'Benal??a de las Villas', 'Benamaurel', 'B??rchules', 'Bubi??n', 'Busqu??star', 'Cac??n', 'C??diar', 'C??jar', 'Calahorra (La)', 'Calicasas', 'Campot??jar', 'C????ar', 'Caniles', 'Capileira', 'Carataunas', 'C??staras', 'Castill??jar', 'Castril', 'Cenes de la Vega', 'Chauchina', 'Chimeneas', 'Churriana de la Vega', 'Cijuela', 'Cogollos de Guadix', 'Cogollos de la Vega', 'Colomera', 'Cortes de Baza', 'Cortes y Graena', 'Cuevas del Campo', 'C??llar', 'C??llar Vega', 'Darro', 'Dehesas de Guadix', 'Deifontes', 'Diezma', 'D??lar', 'D??lar', 'D??dar', 'D??rcal', 'Esc??zar', 'Ferreira', 'Fonelas', 'Freila', 'Fuente Vaqueros', 'Gabias (Las)', 'Galera', 'Gobernador', 'G??jar', 'Gor', 'Gorafe', 'Granada', 'Guadahortuna', 'Guadix', 'Guajares (Los)', 'Gualchos', 'G??ejar Sierra', 'G??ev??jar', 'Hu??lago', 'Hu??neja', 'Hu??scar', 'Hu??tor de Santill??n', 'Hu??tor T??jar', 'Hu??tor Vega', 'Illora', 'Itrabo', 'Iznalloz', 'Jayena', 'Jerez del Marquesado', 'Jete', 'Jun', 'Juviles', 'L??char', 'Lanjar??n', 'Lanteira', 'Lecr??n', 'Lenteg??', 'Lobras', 'Loja', 'Lugros', 'L??jar', 'Malah?? (La)', 'Maracena', 'Marchal', 'Mocl??n', 'Molv??zar', 'Monachil', 'Montefr??o', 'Montej??car', 'Montillana', 'Moraleda de Zafayona', 'Morel??bor', 'Motril', 'Murtas', 'Nevada', 'Nig??elas', 'N??var', 'Og??jares', 'Orce', '??rgiva', 'Ot??var', 'Otura', 'Padul', 'Pampaneira', 'Pedro Mart??nez', 'Peligros', 'Peza (La)', 'P????ar', 'Pinar (El)', 'Pinos Genil', 'Pinos Puente', 'Pol??car', 'Polopos', 'P??rtugos', 'Puebla de Don Fadrique', 'Pulianas', 'Purullena', 'Qu??ntar', 'Rubite', 'Salar', 'Salobre??a', 'Santa Cruz del Comercio', 'Santa Fe', 'Soport??jar', 'Sorvil??n', 'Taha (La)', 'Torre-Cardela', 'Torvizc??n', 'Trev??lez', 'Tur??n', 'Ug??jar', 'Valle (El)', 'Valle del Zalab??', 'V??lor', 'Vegas del Genil', 'V??lez de Benaudalla', 'Ventas de Huelma', 'Villamena', 'Villanueva de las Torres', 'Villanueva Mes??a', 'V??znar', 'Zafarraya', 'Zagra', 'Zubia (La)', 'Z??jar', 'Al??jar', 'Aljaraque', 'Almendro (El)', 'Almonaster la Real', 'Almonte', 'Alosno', 'Aracena', 'Aroche', 'Arroyomolinos de Le??n', 'Ayamonte', 'Beas', 'Berrocal', 'Bollullos Par del Condado', 'Bonares', 'Cabezas Rubias', 'Cala', 'Cala??as', 'Campillo (El)', 'Campofr??o', 'Ca??averal de Le??n', 'Cartaya', 'Casta??o del Robledo', 'Cerro de And??valo (El)', 'Chucena', 'Corteconcepci??n', 'Cortegana', 'Cortelazor', 'Cumbres de Enmedio', 'Cumbres de San Bartolom??', 'Cumbres Mayores', 'Encinasola', 'Escacena del Campo', 'Fuenteheridos', 'Galaroza', 'Gibrale??n', 'Granada de R??o-Tinto (La)', 'Granado (El)', 'Higuera de la Sierra', 'Hinojales', 'Hinojos', 'Huelva', 'Isla Cristina', 'Jabugo', 'Lepe', 'Linares de la Sierra', 'Lucena del Puerto', 'Manzanilla', 'Marines (Los)', 'Minas de Riotinto', 'Moguer', 'Nava (La)', 'Nerva', 'Niebla', 'Palma del Condado (La)', 'Palos de la Frontera', 'Paterna del Campo', 'Paymogo', 'Puebla de Guzm??n', 'Puerto Moral', 'Punta Umbr??a', 'Rociana del Condado', 'Rosal de la Frontera', 'San Bartolom?? de la Torre', 'San Juan del Puerto', 'San Silvestre de Guzm??n', 'Sanl??car de Guadiana', 'Santa Ana la Real', 'Santa B??rbara de Casa', 'Santa Olalla del Cala', 'Trigueros', 'Valdelarco', 'Valverde del Camino', 'Villablanca', 'Villalba del Alcor', 'Villanueva de las Cruces', 'Villanueva de los Castillejos', 'Villarrasa', 'Zalamea la Real', 'Zufre', 'Albanchez de M??gina', 'Alcal?? la Real', 'Alcaudete', 'Aldeaquemada', 'And??jar', 'Arjona', 'Arjonilla', 'Arquillos', 'Arroyo del Ojanco', 'Baeza', 'Bail??n', 'Ba??os de la Encina', 'Beas de Segura', 'Bedmar y Garc??ez', 'Beg??jar', 'B??lmez de la Moraleda', 'Benatae', 'Cabra del Santo Cristo', 'Cambil', 'Campillo de Arenas', 'Canena', 'Carboneros', 'C??rcheles', 'Carolina (La)', 'Castellar', 'Castillo de Locub??n', 'Cazalilla', 'Cazorla', 'Chiclana de Segura', 'Chillu??var', 'Esca??uela', 'Espel??y', 'Frailes', 'Fuensanta de Martos', 'Fuerte del Rey', 'G??nave', 'Guardia de Ja??n (La)', 'Guarrom??n', 'Higuera de Calatrava', 'Hinojares', 'Hornos', 'Huelma', 'Huesa', 'Ibros', 'Iruela (La)', 'Iznatoraf', 'Jabalquinto', 'Ja??n', 'Jamilena', 'Jimena', 'J??dar', 'Lahiguera', 'Larva', 'Linares', 'Lopera', 'Lupi??n', 'Mancha Real', 'Marmolejo', 'Martos', 'Meng??bar', 'Montiz??n', 'Navas de San Juan', 'Noalejo', 'Orcera', 'Peal de Becerro', 'Pegalajar', 'Porcuna', 'Pozo Alc??n', 'Puente de G??nave', 'Puerta de Segura (La)', 'Quesada', 'Rus', 'Sabiote', 'Santa Elena', 'Santiago-Pontones', 'Santiago de Calatrava', 'Santisteban del Puerto', 'Santo Tom??', 'Segura de la Sierra', 'Siles', 'Sorihuela del Guadalimar', 'Torre del Campo', 'Torreblascopedro', 'Torredonjimeno', 'Torreperogil', 'Torres', 'Torres de Alb??nchez', '??beda', 'Valdepe??as de Ja??n', 'Vilches', 'Villacarrillo', 'Villanueva de la Reina', 'Villanueva del Arzobispo', 'Villardompardo', 'Villares (Los)', 'Villarrodrigo', 'Villatorres', 'Alameda', 'Alcauc??n', 'Alfarnate', 'Alfarnatejo', 'Algarrobo', 'Algatoc??n', 'Alhaur??n de la Torre', 'Alhaur??n el Grande', 'Alm??char', 'Almargen', 'Almog??a', '??lora', 'Alozaina', 'Alpandeire', 'Antequera', '??rchez', 'Archidona', 'Ardales', 'Arenas', 'Arriate', 'Atajate', 'Benadalid', 'Benahav??s', 'Benalaur??a', 'Benalm??dena', 'Benamargosa', 'Benamocarra', 'Benaoj??n', 'Benarrab??', 'Borge (El)', 'Burgo (El)', 'Campillos', 'Ca??ete la Real', 'Canillas de Aceituno', 'Canillas de Albaida', 'Carratraca', 'Cartajima', 'C??rtama', 'Casabermeja', 'Casarabonela', 'Casares', 'Co??n', 'Colmenar', 'Comares', 'C??mpeta', 'Cortes de la Frontera', 'Cuevas Bajas', 'Cuevas de San Marcos', 'Cuevas del Becerro', 'C??tar', 'Estepona', 'Faraj??n', 'Frigiliana', 'Fuengirola', 'Fuente de Piedra', 'Gauc??n', 'Genalguacil', 'Guaro', 'Humilladero', 'Igualeja', 'Ist??n', 'Iznate', 'Jimera de L??bar', 'Jubrique', 'J??zcar', 'Macharaviaya', 'M??laga', 'Manilva', 'Marbella', 'Mijas', 'Moclinejo', 'Mollina', 'Monda', 'Montejaque', 'Nerja', 'Oj??n', 'Parauta', 'Periana', 'Pizarra', 'Pujerra', 'Rinc??n de la Victoria', 'Riogordo', 'Ronda', 'Salares', 'Sayalonga', 'Sedella', 'Sierra de Yeguas', 'Teba', 'Tolox', 'Torremolinos', 'Torrox', 'Total??n', 'Valle de Abdalaj??s', 'V??lez-M??laga', 'Villanueva de Algaidas', 'Villanueva de Tapia', 'Villanueva del Rosario', 'Villanueva del Trabuco', 'Vi??uela', 'Yunquera', 'Aguadulce', 'Alan??s', 'Albaida del Aljarafe', 'Alcal?? de Guada??ra', 'Alcal?? del R??o', 'Alcolea del R??o', 'Algaba (La)', 'Alg??mitas', 'Almad??n de la Plata', 'Almensilla', 'Arahal', 'Aznalc??zar', 'Aznalc??llar', 'Badolatosa', 'Benacaz??n', 'Bollullos de la Mitaci??n', 'Bormujos', 'Brenes', 'Burguillos', 'Cabezas de San Juan (Las)', 'Camas', 'Campana (La)', 'Ca??ada Rosal', 'Cantillana', 'Carmona', 'Carri??n de los C??spedes', 'Casariche', 'Castilblanco de los Arroyos', 'Castilleja de Guzm??n', 'Castilleja de la Cuesta', 'Castilleja del Campo', 'Castillo de las Guardas (El)', 'Cazalla de la Sierra', 'Constantina', 'Coria del R??o', 'Coripe', 'Coronil (El)', 'Corrales (Los)', 'Cuervo de Sevilla (El)', 'Dos Hermanas', '??cija', 'Espartinas', 'Estepa', 'Fuentes de Andaluc??a', 'Garrobo (El)', 'Gelves', 'Gerena', 'Gilena', 'Gines', 'Guadalcanal', 'Guillena', 'Herrera', 'Hu??var del Aljarafe', 'Isla Mayor', 'Lantejuela (La)', 'Lebrija', 'Lora de Estepa', 'Lora del R??o', 'Luisiana (La)', 'Madro??o (El)', 'Mairena del Alcor', 'Mairena del Aljarafe', 'Marchena', 'Marinaleda', 'Mart??n de la Jara', 'Molares (Los)', 'Montellano', 'Mor??n de la Frontera', 'Navas de la Concepci??n (Las)', 'Olivares', 'Osuna', 'Palacios y Villafranca (Los)', 'Palomares del R??o', 'Paradas', 'Pedrera', 'Pedroso (El)', 'Pe??aflor', 'Pilas', 'Pruna', 'Puebla de Cazalla (La)', 'Puebla de los Infantes (La)', 'Puebla del R??o (La)', 'Real de la Jara (El)', 'Rinconada (La)', 'Roda de Andaluc??a (La)', 'Ronquillo (El)', 'Rubio (El)', 'Salteras', 'San Juan de Aznalfarache', 'San Nicol??s del Puerto', 'Sanl??car la Mayor', 'Santiponce', 'Saucejo (El)', 'Sevilla', 'Tocina', 'Tomares', 'Umbrete', 'Utrera', 'Valencina de la Concepci??n', 'Villamanrique de la Condesa', 'Villanueva de San Juan', 'Villanueva del Ariscal', 'Villanueva del R??o y Minas', 'Villaverde del R??o', 'Viso del Alcor (El)']
    }

    _renderSubmitButton() {
        return (
            <Button
                type="submit"
                style={{ marginLeft: "auto" }}
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
                    onClick={() => {this.setState({shouldOpenSnackbar: false});}}
                >
                    <CloseIcon fontSize="small"/>
                </IconButton>
            </React.Fragment>
        );

        return (
            <Snackbar
                open={this.state.shouldOpenSnackbar}
                autoHideDuration={5000}
                onClose={() => {this.setState({shouldOpenSnackbar: false});}}
                message="Por favor, selecciona una localidad de origen."
                action={action}
            />
        );
    }

    _renderBackButton() {
        return (
            <Button
                style={{ marginLeft: "auto", flexGrow: 1 }}
                variant="contained"
                size="medium"
                color="secondary"
                onClick={this._handleBack}
            >
                Atr??s
            </Button>
        )
    }

    render() {
        if (this.state.shouldRenderForm) {
            return (
                <>
                <Typography component="h1" variant="h5">
                Busca el mejor orden para tu pr??ximo destino
                </Typography>
                <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                    {this._renderTextInput()}
                    <DestinationsNumberSlider texto='N??mero de destinos:' minValue={10} maxValue={500} onChange={this.handleSliderChange}/>
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
                    <DestinationsDataGrid fromTown={this.state.town} limit={this.state.limit}/>
                    {this._renderBackButton()}
                </>
            );
        }
    }

}
