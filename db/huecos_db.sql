--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18
-- Dumped by pg_dump version 17.5

-- Started on 2025-07-09 10:28:29

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 24591)
-- Name: huecos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.huecos (
    id integer NOT NULL,
    localizacion point NOT NULL,
    nombre character varying(100) NOT NULL,
    estado integer,
    direccion character varying(150),
    fecha date NOT NULL,
    celular character varying(13) NOT NULL
);


ALTER TABLE public.huecos OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 24590)
-- Name: huecos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.huecos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.huecos_id_seq OWNER TO postgres;

--
-- TOC entry 3319 (class 0 OID 0)
-- Dependencies: 210
-- Name: huecos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.huecos_id_seq OWNED BY public.huecos.id;


--
-- TOC entry 3170 (class 2604 OID 24594)
-- Name: huecos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.huecos ALTER COLUMN id SET DEFAULT nextval('public.huecos_id_seq'::regclass);


--
-- TOC entry 3313 (class 0 OID 24591)
-- Dependencies: 211
-- Data for Name: huecos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.huecos (id, localizacion, nombre, estado, direccion, fecha, celular) FROM stdin;
\.


--
-- TOC entry 3320 (class 0 OID 0)
-- Dependencies: 210
-- Name: huecos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.huecos_id_seq', 1, false);


--
-- TOC entry 3172 (class 2606 OID 24596)
-- Name: huecos huecos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.huecos
    ADD CONSTRAINT huecos_pkey PRIMARY KEY (id);


-- Completed on 2025-07-09 10:28:29

--
-- PostgreSQL database dump complete
--

