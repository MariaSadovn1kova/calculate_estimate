PGDMP         .                {            calculate_estimate    14.5    14.5 Q    P           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            R           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            S           1262    33640    calculate_estimate    DATABASE     o   CREATE DATABASE calculate_estimate WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
 "   DROP DATABASE calculate_estimate;
                postgres    false            �            1259    33909 
   Accounting    TABLE       CREATE TABLE public."Accounting" (
    "ID" integer NOT NULL,
    "Building_ID" integer,
    "BuildingMaterial_ID" integer NOT NULL,
    "Quantity" integer NOT NULL,
    "OperationType" character varying(255) NOT NULL,
    "Date" date NOT NULL,
    "Price" integer
);
     DROP TABLE public."Accounting";
       public         heap    postgres    false            �            1259    33908    Accounting_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Accounting_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Accounting_ID_seq";
       public          postgres    false    222            T           0    0    Accounting_ID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Accounting_ID_seq" OWNED BY public."Accounting"."ID";
          public          postgres    false    221            �            1259    33868    Building    TABLE     �   CREATE TABLE public."Building" (
    "ID" integer NOT NULL,
    "Project_ID" integer NOT NULL,
    "Foundation_ID" integer NOT NULL,
    "Roof_ID" integer NOT NULL
);
    DROP TABLE public."Building";
       public         heap    postgres    false            �            1259    33900    BuildingMaterial    TABLE     0  CREATE TABLE public."BuildingMaterial" (
    "ID" integer NOT NULL,
    "Name" character varying(255) NOT NULL,
    "Type" character varying(255) NOT NULL,
    "DeclaredValue" double precision NOT NULL,
    "UnitOfMeasurement" character varying(255) NOT NULL,
    "Quantity" double precision NOT NULL
);
 &   DROP TABLE public."BuildingMaterial";
       public         heap    postgres    false            �            1259    33899    BuildingMaterial_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."BuildingMaterial_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."BuildingMaterial_ID_seq";
       public          postgres    false    220            U           0    0    BuildingMaterial_ID_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."BuildingMaterial_ID_seq" OWNED BY public."BuildingMaterial"."ID";
          public          postgres    false    219            �            1259    33867    Building_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Building_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Building_ID_seq";
       public          postgres    false    212            V           0    0    Building_ID_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Building_ID_seq" OWNED BY public."Building"."ID";
          public          postgres    false    211            �            1259    33893    Estimate    TABLE     |   CREATE TABLE public."Estimate" (
    "ID" integer NOT NULL,
    "Building_ID" integer NOT NULL,
    "Date" date NOT NULL
);
    DROP TABLE public."Estimate";
       public         heap    postgres    false            �            1259    33916    EstimateElement    TABLE     �  CREATE TABLE public."EstimateElement" (
    "ID" integer NOT NULL,
    "Estimate_ID" integer NOT NULL,
    "Name" character varying(255) NOT NULL,
    "UnitOfMeasurement" character varying(20) NOT NULL,
    "Quantity" integer NOT NULL,
    "UnitCost" integer,
    "TotalPrice" integer,
    "Category" character varying(255) NOT NULL,
    "BuildingPart" character varying(255) NOT NULL
);
 %   DROP TABLE public."EstimateElement";
       public         heap    postgres    false            �            1259    33915    EstimateElement_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."EstimateElement_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."EstimateElement_ID_seq";
       public          postgres    false    224            W           0    0    EstimateElement_ID_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."EstimateElement_ID_seq" OWNED BY public."EstimateElement"."ID";
          public          postgres    false    223            �            1259    33892    Estimate_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Estimate_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Estimate_ID_seq";
       public          postgres    false    218            X           0    0    Estimate_ID_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Estimate_ID_seq" OWNED BY public."Estimate"."ID";
          public          postgres    false    217            �            1259    33884    Floor    TABLE     �  CREATE TABLE public."Floor" (
    "ID" integer NOT NULL,
    "CalculationBalk" character varying(500),
    "CalculationBoard" character varying(500) NOT NULL,
    "CalculationReinforcement" character varying(500),
    "CalculationBrick" character varying(500),
    "CalculationBlock" character varying(500),
    "CalculationBar" character varying(500),
    "Building_ID" integer NOT NULL,
    "Material" character varying(255) NOT NULL,
    "TotalWallsLength" integer NOT NULL,
    "WallHeight" integer NOT NULL,
    "WallDepth" integer NOT NULL,
    "TotalDoorsAndWindowsArea" integer NOT NULL,
    "BalkWidth" integer,
    "BalkHeight" integer,
    "BlockLength" integer,
    "BlockWidth" integer,
    "BlockHeight" integer,
    "MortarDepth" integer
);
    DROP TABLE public."Floor";
       public         heap    postgres    false            �            1259    33883    Floor_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Floor_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Floor_ID_seq";
       public          postgres    false    216            Y           0    0    Floor_ID_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Floor_ID_seq" OWNED BY public."Floor"."ID";
          public          postgres    false    215            �            1259    33992    Formula    TABLE     /  CREATE TABLE public."Formula" (
    "ID" integer NOT NULL,
    "BuildingPart" character varying(100) NOT NULL,
    "Material" character varying(100) NOT NULL,
    "Category" character varying(100) NOT NULL,
    "Content" character varying(500) NOT NULL,
    "TechnicalContent" character varying(500)
);
    DROP TABLE public."Formula";
       public         heap    postgres    false            �            1259    33999    Formula_ID_seq    SEQUENCE     �   ALTER TABLE public."Formula" ALTER COLUMN "ID" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Formula_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228            �            1259    33875 
   Foundation    TABLE     O  CREATE TABLE public."Foundation" (
    "ID" integer NOT NULL,
    "FoundationType" character varying(100) NOT NULL,
    "Width" integer,
    "Length" integer,
    "Height" integer NOT NULL,
    "Depth" integer NOT NULL,
    "CommonPerimeter" integer,
    "BoardWidth" integer NOT NULL,
    "NumberReinforcement" integer NOT NULL,
    "TapeLength" integer,
    "CalculationBoard" character varying(500) NOT NULL,
    "CalculationReinforcement" character varying(500) NOT NULL,
    "CalculationConcrete" character varying(500) NOT NULL,
    "CalculationRod" character varying(500) NOT NULL
);
     DROP TABLE public."Foundation";
       public         heap    postgres    false            �            1259    33874    Foundation_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Foundation_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Foundation_ID_seq";
       public          postgres    false    214            Z           0    0    Foundation_ID_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Foundation_ID_seq" OWNED BY public."Foundation"."ID";
          public          postgres    false    213            �            1259    33859    Project    TABLE     �  CREATE TABLE public."Project" (
    "ID" integer NOT NULL,
    "Date" date NOT NULL,
    "СustomerFullName" character varying(255) NOT NULL,
    "Address" character varying(255) NOT NULL,
    "PhoneNumber" character varying(20) NOT NULL,
    "Email" character varying(100),
    "Comment" character varying(500),
    "ResponsibleEmployeeFullName" character varying(255) NOT NULL,
    "Status" character varying(20) NOT NULL
);
    DROP TABLE public."Project";
       public         heap    postgres    false            �            1259    33858    Project_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Project_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Project_ID_seq";
       public          postgres    false    210            [           0    0    Project_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Project_ID_seq" OWNED BY public."Project"."ID";
          public          postgres    false    209            �            1259    33985    Project_ID_seq1    SEQUENCE     �   ALTER TABLE public."Project" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Project_ID_seq1"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    210            �            1259    33925    Roof    TABLE       CREATE TABLE public."Roof" (
    "ID" integer NOT NULL,
    "BaseLength" integer NOT NULL,
    "EavesOverhang" integer,
    "CorniceIndentation" integer,
    "BaseWidth" integer NOT NULL,
    "BaseAdditionalWidth" integer,
    "LiftingHeight" integer NOT NULL,
    "LiftingAdditionalHeight" integer,
    "CalculationBalk" character varying(500) NOT NULL,
    "CalculationBoard" character varying(500) NOT NULL,
    "CalculationCorniceSystem" character varying(500) NOT NULL,
    "CalculationRoofingMaterial" character varying(500) NOT NULL
);
    DROP TABLE public."Roof";
       public         heap    postgres    false            �            1259    33924    Roof_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."Roof_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Roof_ID_seq";
       public          postgres    false    226            \           0    0    Roof_ID_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Roof_ID_seq" OWNED BY public."Roof"."ID";
          public          postgres    false    225            �           2604    33912    Accounting ID    DEFAULT     t   ALTER TABLE ONLY public."Accounting" ALTER COLUMN "ID" SET DEFAULT nextval('public."Accounting_ID_seq"'::regclass);
 @   ALTER TABLE public."Accounting" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    33871    Building ID    DEFAULT     p   ALTER TABLE ONLY public."Building" ALTER COLUMN "ID" SET DEFAULT nextval('public."Building_ID_seq"'::regclass);
 >   ALTER TABLE public."Building" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    211    212    212            �           2604    33903    BuildingMaterial ID    DEFAULT     �   ALTER TABLE ONLY public."BuildingMaterial" ALTER COLUMN "ID" SET DEFAULT nextval('public."BuildingMaterial_ID_seq"'::regclass);
 F   ALTER TABLE public."BuildingMaterial" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    33896    Estimate ID    DEFAULT     p   ALTER TABLE ONLY public."Estimate" ALTER COLUMN "ID" SET DEFAULT nextval('public."Estimate_ID_seq"'::regclass);
 >   ALTER TABLE public."Estimate" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    33919    EstimateElement ID    DEFAULT     ~   ALTER TABLE ONLY public."EstimateElement" ALTER COLUMN "ID" SET DEFAULT nextval('public."EstimateElement_ID_seq"'::regclass);
 E   ALTER TABLE public."EstimateElement" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    33887    Floor ID    DEFAULT     j   ALTER TABLE ONLY public."Floor" ALTER COLUMN "ID" SET DEFAULT nextval('public."Floor_ID_seq"'::regclass);
 ;   ALTER TABLE public."Floor" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    33878    Foundation ID    DEFAULT     t   ALTER TABLE ONLY public."Foundation" ALTER COLUMN "ID" SET DEFAULT nextval('public."Foundation_ID_seq"'::regclass);
 @   ALTER TABLE public."Foundation" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    213    214    214            �           2604    33928    Roof ID    DEFAULT     h   ALTER TABLE ONLY public."Roof" ALTER COLUMN "ID" SET DEFAULT nextval('public."Roof_ID_seq"'::regclass);
 :   ALTER TABLE public."Roof" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    225    226    226            F          0    33909 
   Accounting 
   TABLE DATA           �   COPY public."Accounting" ("ID", "Building_ID", "BuildingMaterial_ID", "Quantity", "OperationType", "Date", "Price") FROM stdin;
    public          postgres    false    222   Vg       <          0    33868    Building 
   TABLE DATA           T   COPY public."Building" ("ID", "Project_ID", "Foundation_ID", "Roof_ID") FROM stdin;
    public          postgres    false    212   �g       D          0    33900    BuildingMaterial 
   TABLE DATA           t   COPY public."BuildingMaterial" ("ID", "Name", "Type", "DeclaredValue", "UnitOfMeasurement", "Quantity") FROM stdin;
    public          postgres    false    220   �g       B          0    33893    Estimate 
   TABLE DATA           A   COPY public."Estimate" ("ID", "Building_ID", "Date") FROM stdin;
    public          postgres    false    218   :i       H          0    33916    EstimateElement 
   TABLE DATA           �   COPY public."EstimateElement" ("ID", "Estimate_ID", "Name", "UnitOfMeasurement", "Quantity", "UnitCost", "TotalPrice", "Category", "BuildingPart") FROM stdin;
    public          postgres    false    224   Wi       @          0    33884    Floor 
   TABLE DATA           `  COPY public."Floor" ("ID", "CalculationBalk", "CalculationBoard", "CalculationReinforcement", "CalculationBrick", "CalculationBlock", "CalculationBar", "Building_ID", "Material", "TotalWallsLength", "WallHeight", "WallDepth", "TotalDoorsAndWindowsArea", "BalkWidth", "BalkHeight", "BlockLength", "BlockWidth", "BlockHeight", "MortarDepth") FROM stdin;
    public          postgres    false    216   ti       L          0    33992    Formula 
   TABLE DATA           p   COPY public."Formula" ("ID", "BuildingPart", "Material", "Category", "Content", "TechnicalContent") FROM stdin;
    public          postgres    false    228   �i       >          0    33875 
   Foundation 
   TABLE DATA             COPY public."Foundation" ("ID", "FoundationType", "Width", "Length", "Height", "Depth", "CommonPerimeter", "BoardWidth", "NumberReinforcement", "TapeLength", "CalculationBoard", "CalculationReinforcement", "CalculationConcrete", "CalculationRod") FROM stdin;
    public          postgres    false    214   0n       :          0    33859    Project 
   TABLE DATA           �   COPY public."Project" ("ID", "Date", "СustomerFullName", "Address", "PhoneNumber", "Email", "Comment", "ResponsibleEmployeeFullName", "Status") FROM stdin;
    public          postgres    false    210   Mn       J          0    33925    Roof 
   TABLE DATA             COPY public."Roof" ("ID", "BaseLength", "EavesOverhang", "CorniceIndentation", "BaseWidth", "BaseAdditionalWidth", "LiftingHeight", "LiftingAdditionalHeight", "CalculationBalk", "CalculationBoard", "CalculationCorniceSystem", "CalculationRoofingMaterial") FROM stdin;
    public          postgres    false    226   �n       ]           0    0    Accounting_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Accounting_ID_seq"', 9, true);
          public          postgres    false    221            ^           0    0    BuildingMaterial_ID_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."BuildingMaterial_ID_seq"', 25, true);
          public          postgres    false    219            _           0    0    Building_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Building_ID_seq"', 1, false);
          public          postgres    false    211            `           0    0    EstimateElement_ID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."EstimateElement_ID_seq"', 1, false);
          public          postgres    false    223            a           0    0    Estimate_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Estimate_ID_seq"', 1, false);
          public          postgres    false    217            b           0    0    Floor_ID_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Floor_ID_seq"', 1, false);
          public          postgres    false    215            c           0    0    Formula_ID_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Formula_ID_seq"', 44, true);
          public          postgres    false    229            d           0    0    Foundation_ID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Foundation_ID_seq"', 1, false);
          public          postgres    false    213            e           0    0    Project_ID_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Project_ID_seq"', 1, false);
          public          postgres    false    209            f           0    0    Project_ID_seq1    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Project_ID_seq1"', 16, true);
          public          postgres    false    227            g           0    0    Roof_ID_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Roof_ID_seq"', 1, false);
          public          postgres    false    225            �           2606    33914    Accounting Accounting_pk 
   CONSTRAINT     \   ALTER TABLE ONLY public."Accounting"
    ADD CONSTRAINT "Accounting_pk" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."Accounting" DROP CONSTRAINT "Accounting_pk";
       public            postgres    false    222            �           2606    33907 $   BuildingMaterial BuildingMaterial_pk 
   CONSTRAINT     h   ALTER TABLE ONLY public."BuildingMaterial"
    ADD CONSTRAINT "BuildingMaterial_pk" PRIMARY KEY ("ID");
 R   ALTER TABLE ONLY public."BuildingMaterial" DROP CONSTRAINT "BuildingMaterial_pk";
       public            postgres    false    220            �           2606    33873    Building Building_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public."Building"
    ADD CONSTRAINT "Building_pk" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Building" DROP CONSTRAINT "Building_pk";
       public            postgres    false    212            �           2606    33923 "   EstimateElement EstimateElement_pk 
   CONSTRAINT     f   ALTER TABLE ONLY public."EstimateElement"
    ADD CONSTRAINT "EstimateElement_pk" PRIMARY KEY ("ID");
 P   ALTER TABLE ONLY public."EstimateElement" DROP CONSTRAINT "EstimateElement_pk";
       public            postgres    false    224            �           2606    33898    Estimate Estimate_pk 
   CONSTRAINT     X   ALTER TABLE ONLY public."Estimate"
    ADD CONSTRAINT "Estimate_pk" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Estimate" DROP CONSTRAINT "Estimate_pk";
       public            postgres    false    218            �           2606    33891    Floor Floor_pk 
   CONSTRAINT     R   ALTER TABLE ONLY public."Floor"
    ADD CONSTRAINT "Floor_pk" PRIMARY KEY ("ID");
 <   ALTER TABLE ONLY public."Floor" DROP CONSTRAINT "Floor_pk";
       public            postgres    false    216            �           2606    33998    Formula Formula_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Formula"
    ADD CONSTRAINT "Formula_pkey" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Formula" DROP CONSTRAINT "Formula_pkey";
       public            postgres    false    228            �           2606    33882    Foundation Foundation_pk 
   CONSTRAINT     \   ALTER TABLE ONLY public."Foundation"
    ADD CONSTRAINT "Foundation_pk" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."Foundation" DROP CONSTRAINT "Foundation_pk";
       public            postgres    false    214            �           2606    33866    Project Project_pk 
   CONSTRAINT     V   ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_pk" PRIMARY KEY ("ID");
 @   ALTER TABLE ONLY public."Project" DROP CONSTRAINT "Project_pk";
       public            postgres    false    210            �           2606    33932    Roof Roof_pk 
   CONSTRAINT     P   ALTER TABLE ONLY public."Roof"
    ADD CONSTRAINT "Roof_pk" PRIMARY KEY ("ID");
 :   ALTER TABLE ONLY public."Roof" DROP CONSTRAINT "Roof_pk";
       public            postgres    false    226            �           2606    33967    Accounting Accounting_fk0    FK CONSTRAINT     �   ALTER TABLE ONLY public."Accounting"
    ADD CONSTRAINT "Accounting_fk0" FOREIGN KEY ("Building_ID") REFERENCES public."Building"("ID");
 G   ALTER TABLE ONLY public."Accounting" DROP CONSTRAINT "Accounting_fk0";
       public          postgres    false    3221    212    222            �           2606    33972    Accounting Accounting_fk1    FK CONSTRAINT     �   ALTER TABLE ONLY public."Accounting"
    ADD CONSTRAINT "Accounting_fk1" FOREIGN KEY ("BuildingMaterial_ID") REFERENCES public."BuildingMaterial"("ID");
 G   ALTER TABLE ONLY public."Accounting" DROP CONSTRAINT "Accounting_fk1";
       public          postgres    false    220    3229    222            �           2606    33942    Building Building_fk0    FK CONSTRAINT     �   ALTER TABLE ONLY public."Building"
    ADD CONSTRAINT "Building_fk0" FOREIGN KEY ("Project_ID") REFERENCES public."Project"("ID");
 C   ALTER TABLE ONLY public."Building" DROP CONSTRAINT "Building_fk0";
       public          postgres    false    3219    212    210            �           2606    33947    Building Building_fk1    FK CONSTRAINT     �   ALTER TABLE ONLY public."Building"
    ADD CONSTRAINT "Building_fk1" FOREIGN KEY ("Foundation_ID") REFERENCES public."Foundation"("ID");
 C   ALTER TABLE ONLY public."Building" DROP CONSTRAINT "Building_fk1";
       public          postgres    false    3223    212    214            �           2606    33952    Building Building_fk2    FK CONSTRAINT     }   ALTER TABLE ONLY public."Building"
    ADD CONSTRAINT "Building_fk2" FOREIGN KEY ("Roof_ID") REFERENCES public."Roof"("ID");
 C   ALTER TABLE ONLY public."Building" DROP CONSTRAINT "Building_fk2";
       public          postgres    false    3235    226    212            �           2606    33977 #   EstimateElement EstimateElement_fk0    FK CONSTRAINT     �   ALTER TABLE ONLY public."EstimateElement"
    ADD CONSTRAINT "EstimateElement_fk0" FOREIGN KEY ("Estimate_ID") REFERENCES public."Estimate"("ID");
 Q   ALTER TABLE ONLY public."EstimateElement" DROP CONSTRAINT "EstimateElement_fk0";
       public          postgres    false    3227    224    218            �           2606    33962    Estimate Estimate_fk0    FK CONSTRAINT     �   ALTER TABLE ONLY public."Estimate"
    ADD CONSTRAINT "Estimate_fk0" FOREIGN KEY ("Building_ID") REFERENCES public."Building"("ID");
 C   ALTER TABLE ONLY public."Estimate" DROP CONSTRAINT "Estimate_fk0";
       public          postgres    false    218    3221    212            �           2606    33957    Floor Floor_fk0    FK CONSTRAINT        ALTER TABLE ONLY public."Floor"
    ADD CONSTRAINT "Floor_fk0" FOREIGN KEY ("Building_ID") REFERENCES public."Building"("ID");
 =   ALTER TABLE ONLY public."Floor" DROP CONSTRAINT "Floor_fk0";
       public          postgres    false    3221    216    212            F   `   x��̱�0���%��� K0A�a�H���F�C ��)啌F#߽x=7?�z!bP��;KO�X�9m�Sg����Hy�(~"x��pOy`�>�G�      <      x������ � �      D   G  x�uQIN1<�_�s���dr�\yy�$	$pB$^� !��?�<N� E֌�����<`kl�kl�Y�6�,�%�4�1�xbK�q$��J����34)k�s�K^��'�I���9�_���NU5�:6�NiZn��u���^�W��F�g���1}64�9��T!x`COkL��;�C,0��ґq�B<��$�*�����}e~��ͮ=�[����RоP�MB�u�V289pt�)��D��b+*sȄ��R|�پPΦ�M~��[H>�v_�*n�����+�Z1����R|�����MK�l�8�����R��)8�      B      x������ � �      H      x������ � �      @      x������ � �      L   �  x��X�n�F>s���qL���=4@�^
�R��e�V���̦��?A��99�>�VE�PE��W�}�����\rIJ����~3�����d�tL�h�^�>�����O��k�O������9l���l�:�2�?&{k��5Ѯ	sG0�ta�Kr �
���`��3����Ď�w�r&�%�XhkJh'\Ą��A��d�h�>�֧�rX=��ؾ����,K�n,�ݪ���N_�f�P"=��aF�����iF������m��~�]����6���{�Z�6,O����`�*J�o���;D�|>������i�w��L8!���Z����'�������u��lM�e/����5�x�=;��hS*����ㆶN�O���Y!�X�d�w��<0:{�b��f��w����}��i���bO��ԙ*���i~���b��o���7B~f���1>��X��B���و�vfd������ߨ�)g D>�/4	$���Gb@� #�x�@�g���b��X������f�g����xy��yD%�RB�G4.G��»�B����2��J��Gf';Y���N����v�<�	�ObՌE�_>A�o�p_K���Ě}����}�~��f:���r?W�i�t������esC-��6qQ���#Q�ZA�:�^��ns��rq���W��R_}.D�S���"Pt7�V�� �*�B��&tI�0�`�k�jO0$���Si,��RG�4$�~�9��n�?����t��d�rD.cg�֥�Ī������*�uiAG�+���!���K�9�x��O�<��!������ް��HM�q[ަ�i�O]/� a�R#�6��w�젌�5�)0|��ߩ����׿v\���5����VW���u�Y'v=�@����&JՓiE�,^Y�wYw���D�Qb���TQ�m��$^|r׭�1�F�Z�N�ۄ#7�|ɉ�'�iyS&`"����wʝv��f;��Cg�1����O��M��k�r�L���b���;��:w���з�*E=��D`<Zo	�����^��KF�:���_���m��Jd�vk3hy[�GLe�`����Bo*J̸
h��;^��>�6  x�噪T���<���j�镑?�ƽF~[&��K�      >      x������ � �      :   f   x�3�4202�50�54�0�¾��]�ě.,����|a녝
f\�}����_ح�*��
$�5l�د`hə��yi�y���)\1z\\\ o�4�      J      x������ � �     