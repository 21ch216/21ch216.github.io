Search.setIndex({"docnames": ["contributor_guide/data", "contributor_guide/index", "contributor_guide/survival", "index", "quick_start", "reference/distributions/exponential", "reference/distributions/gompertz", "reference/distributions/index", "reference/distributions/weibull", "reference/index", "user_guide/data_collect", "user_guide/index", "user_guide/installation", "user_guide/survival"], "filenames": ["contributor_guide/data.rst", "contributor_guide/index.rst", "contributor_guide/survival.rst", "index.rst", "quick_start.rst", "reference/distributions/exponential.rst", "reference/distributions/gompertz.rst", "reference/distributions/index.rst", "reference/distributions/weibull.rst", "reference/index.rst", "user_guide/data_collect.rst", "user_guide/index.rst", "user_guide/installation.rst", "user_guide/survival.rst"], "titles": ["The databook object", "Contributor\u2019s guide", "How to contribute to ReLife\u2019s survival analysis ?", "Welcome to ReLife2\u2019s documentation!", "Quick start", "Exponential", "Gompertz", "Distributions", "Weibull", "API reference", "Lifetime data format", "User guide", "Installation", "How to use survival model"], "terms": {"quick": 3, "start": 3, "how": [1, 3, 9, 10, 11], "contribut": [1, 3, 4, 13], "relif": [0, 1, 3, 9, 10, 11, 12, 13], "modul": [2, 4, 13], "To": [0, 2, 3, 13], "us": [0, 2, 3, 4, 9, 10, 11], "first": [4, 13], "pip": [3, 12], "data": [0, 2, 3, 11, 13], "base": 3, "databook": [1, 2, 4], "complet": [0, 4, 10], "left_censor": [], "right_censor": [], "interval_censor": [], "intervaldata": [], "left_trunc": 0, "right_trunc": [], "interval_trunc": [], "none": [0, 5, 6, 8, 10], "sourc": [0, 3, 5, 6, 8], "_summary_": [5, 6, 8], "paramet": [0, 2, 3, 4, 5, 6, 8, 9], "rais": [5, 6, 8, 13], "valueerror": [], "_description_": [0, 5, 6, 8], "return": [5, 6, 8], "type": [5, 6, 8, 10], "_type_": [], "relife2": [0, 2, 4, 5, 6, 8, 12, 13], "i": [0, 2, 3, 4, 5, 10, 13], "compos": [], "three": [], "contain": [2, 3, 9, 10], "all": [0, 2, 10], "necessari": [], "object": [1, 4], "load": [10, 13], "surviv": [0, 1, 3, 4, 5, 6, 8, 11], "analysi": [1, 3, 13], "workflow": [], "thi": [2, 10, 13], "submodul": [], "parametr": [3, 5], "nonparametr": [], "semiparametr": [], "polici": 3, "reliabl": 3, "theori": 3, "renew": 3, "nutshel": [], "creat": 2, "model": [0, 3, 4, 11], "your": [2, 4, 13], "when": [2, 4, 10, 13], "you": [1, 2, 3, 4, 9, 13], "need": [], "understand": [3, 9], "more": [0, 2, 4, 10, 13], "clearli": [], "work": [3, 9], "pleas": [4, 13], "refer": 3, "section": [2, 10, 13], "The": [1, 2, 3, 4, 5, 9, 11, 13], "store": [2, 13], "specif": [2, 13], "format": [0, 4, 11, 13], "allow": [0, 10], "call": [0, 2, 4, 13], "field": [], "depend": [], "take": [], "numpi": [0, 4, 10, 13], "arrai": [0, 2, 4, 13], "input": [0, 2], "observ": [0, 4, 10], "lifetim": [0, 2, 3, 5, 11, 13], "can": [0, 2, 3, 4, 9, 10, 13], "either": [2, 10, 13], "1d": 2, "2d": 2, "see": [4, 13], "exampl": 3, "below": [2, 10], "import": [0, 4, 10], "np": [0, 2, 4, 5, 6, 8, 10, 13], "1d_data": [], "observed_lifetim": [0, 4, 10, 13], "10": [0, 4, 10, 13], "11": [0, 4, 10, 13], "9": [0, 4, 10, 12, 13], "12": [0, 4, 10, 13], "13": [0, 4, 10, 13], "event": [0, 3, 4, 10, 13], "1": [0, 2, 4, 5, 6, 8, 10, 13], "0": [0, 2, 4, 5, 10, 13], "entri": [0, 4, 10, 13], "3": [0, 2, 4, 10, 13], "5": [0, 4, 10, 13], "2d_data": [], "2": [0, 10], "4": [0, 2, 10], "7": [0, 10], "inf": [0, 10], "departur": [0, 10], "As": [0, 2, 13], "python": [3, 9], "onli": [10, 13], "differ": [], "shape": [0, 10], "advantag": [], "inher": 10, "carri": 10, "censorship": 10, "inform": [0, 3, 10, 11, 13], "wherea": [], "one": [0, 2, 3, 4, 10, 13], "must": [0, 2, 4, 10, 13], "add": [], "indic": [4, 10], "here": [2, 4, 10, 13], "handl": 10, "footnot": [], "Then": [4, 12], "follow": [0, 2, 10, 13], "from": [0, 2, 4, 13], "first_db": 0, "right_censored_ind": [0, 4, 10, 13], "complete_ind": [0, 4, 10, 13], "second_db": 0, "mention": [], "befor": 13, "censor": [0, 3, 4, 10], "explicitli": [], "tag": 10, "through": [1, 3, 13], "serv": [], "both": [], "now": [], "explor": 0, "veri": [0, 2], "easili": [0, 2], "For": [0, 4, 10, 13], "instanc": [0, 4, 13], "might": 0, "get": [0, 3, 4, 13], "everi": [0, 2, 4, 13], "do": 0, "so": 0, "just": [0, 4, 13], "valu": [0, 2, 4, 5, 6, 8, 10, 13], "These": [], "command": [3, 13], "latter": 13, "One": [0, 10, 13], "also": [0, 2], "correspond": [0, 13], "index": [0, 10], "replac": [0, 3], "want": [0, 1, 2, 3, 4, 10, 13], "access": [0, 2], "being": 0, "left": [0, 3, 4, 10], "truncat": [0, 3, 4, 10], "oper": [0, 5], "which": [3, 9], "It": [0, 2, 3, 9, 10], "inversli": [], "final": [], "conveni": 0, "method": [2, 3, 4, 9, 10, 13], "info": [], "summar": [], "content": [], "view": [], "instanci": 2, "db": [], "re": 13, "readi": 13, "exponenti": [3, 4, 7, 9, 13], "exponential_distri": [], "detail": [3, 4, 9, 13], "If": [2, 4, 13], "go": [4, 12], "deeper": 4, "test": 4, "own": [2, 4], "custom": 2, "read": [2, 4, 13], "like": 13, "basic": [], "distrubit": [], "distribut": [2, 5, 9, 13], "onc": 13, "ve": 13, "": [4, 10, 13], "A": [2, 4], "list": [2, 4], "avail": [2, 4, 13], "found": 4, "weibul": [7, 9], "gompertz": [7, 9], "gamma": [], "loglogist": [], "minimum": [], "aft": [], "proport": 3, "hazard": [2, 3, 5, 6, 8], "cox": [], "kaplan": 3, "meier": 3, "nelsonaalen": [], "ar": [0, 2, 4, 10, 13], "group": [], "an": [2, 3, 4, 9, 13], "share": [], "same": [0, 10], "structur": [], "thei": [2, 4], "function": [1, 3, 4, 5, 6, 8, 13], "optmiz": [], "detaile_doc": [], "usag": 13, "rememb": [], "user": [0, 2, 3, 4, 13], "quickli": [], "its": [2, 10, 13], "make": [0, 2, 4], "have": [2, 3, 9, 10, 13], "fit": [2, 4, 13], "after": [2, 13], "hold": [0, 2, 13], "fitting_param": [4, 13], "fitting_result": 13, "attribut": 13, "former": 13, "give": 13, "about": [2, 13], "standard": 13, "error": 13, "deriv": [2, 13], "matrix": 13, "print": [4, 13], "se": [], "aic": [], "avaibl": [], "anoth": [], "per": [], "kwarg": [2, 13], "been": 13, "obtain": 13, "t": [2, 5, 10], "linspac": [4, 13], "sf_valu": [], "sf": [4, 5, 6, 8, 13], "50": [], "sometim": [], "without": 13, "param": [2, 5, 6, 8, 13], "kei": [3, 9, 11, 13], "word": 13, "argument": [2, 10, 13], "desir": 4, "ha": 13, "whose": 4, "size": [5, 6, 8], "number": [3, 13], "00795203": [4, 13], "rate": [4, 5, 6, 8, 13], "initi": [2, 13], "random": 13, "In": [2, 10, 13], "case": 10, "warn": [], "encourag": 13, "specifi": [2, 10, 13], "abov": 13, "sever": [2, 4], "extra": [], "default": [0, 5, 6, 8, 10], "thu": 0, "possibl": [], "similar": [], "interfac": 2, "two": 10, "ndarrai": [0, 2, 5, 6, 8], "alwai": [], "n": [0, 10], "thank": [], "pars": [], "tupl": [], "implement": [2, 4], "he": [], "would": [10, 13], "write": [], "class": [0, 2, 5, 6, 8], "mycustomdata": [], "def": 2, "__init__": 2, "self": 2, "super": 2, "person": [], "process": [1, 3, 4], "could": [], "pass": 2, "new": [2, 3], "custom_": [], "custom_distri": [], "let": [], "ingredi": [], "string": [], "kind": [], "str": [], "option": [0, 5, 6, 8], "expect": [2, 3, 10, 13], "parametricdistrifunct": [], "likelihood": 3, "parametricdistrilikelihood": [], "some": 4, "name": [2, 12, 13], "foo": [], "x": 10, "y": [], "z": [], "line": [], "text": [], "look": [], "our": [], "document": 1, "detailed_doc": [], "ll": [], "definit": 2, "inherit": 2, "chang": [], "careful": [], "mean": [2, 5, 6, 8], "etc": [0, 2, 5], "optim": 3, "global": [], "given": [2, 4, 13], "graph": [], "know": 2, "think": [], "defin": 2, "That": 10, "true": [], "long": [], "respect": [0, 13], "easier": [], "requir": 10, "myfunct": [], "nb_param": 2, "hf": [2, 5, 6, 8], "time": [0, 3, 5, 6, 8, 10], "ones_lik": [], "chf": [5, 6, 8], "var": [5, 6, 8], "mrl": [5, 6, 8], "ichf": [5, 6, 8], "cumulative_hazard_r": [5, 6, 8], "isf": [5, 6, 8], "probabl": [5, 6, 8], "mani": [], "exact": [], "express": [], "well": [], "known": [], "other": [], "param_nam": 2, "paramat": [], "otherwis": 2, "least": [], "3rd": [], "mylikelihood": [], "jac_hf": 2, "len": [], "sampl": [], "jac_chf": [], "jacobian": [], "again": [], "gener": 2, "alreadi": [], "come": 4, "soon": 4, "collect": 10, "current": [], "upstream": [], "reader": [], "propos": [], "By": [], "advanc": [], "mai": [2, 3, 4, 10], "nor": 10, "interv": 10, "too": 10, "we": [2, 4, 10, 13], "tri": 4, "each": [2, 4], "customiz": 4, "asset": 3, "manag": 3, "manipul": [], "estim": 3, "infer": 4, "semi": [], "non": 3, "next": [], "step": [], "moreov": [], "main": 3, "everywher": [], "book": [0, 12], "provid": [0, 3, 11], "wai": 0, "right": [0, 3, 4, 10], "previou": [2, 13], "parser": 12, "models_list": [], "date": 3, "mar": [], "03": [], "2024": 3, "version": 3, "open": 3, "blah": [], "left_censored_ind": [0, 10], "typeerror": [], "keyword": [], "descript": [3, 9, 10], "parametricdistrimodel": [], "distrioptim": [], "properti": [], "autofunct": [], "meth": [], "05": [], "functions_cl": [], "likelihood_cl": [], "mandatori": [], "float": [2, 5, 6, 8, 10], "nb_sampl": [], "weibulldistrilikelihood": [], "column_stack": [], "c": [6, 8], "log": [], "int": [5, 6, 8], "cdf": [5, 6, 8], "cumul": [], "abstract": [], "parametricdistri": [], "approx": [], "scipi": [], "subclass": [], "pdf": [5, 6, 8], "densiti": 5, "weibulldistrifunct": [], "gammaincc": [], "my_distri": [], "hess_negative_log_likelihood": [], "ep": [], "1e": [], "06": [], "scheme": [], "jac_negative_log_likelihood": [], "negative_log_likelihood": 2, "07": [], "first_data": 0, "second_data": 0, "count": [], "nb": [], "tot": [], "panda": [], "check": 3, "out": 3, "introduct": [], "concept": [3, 9, 11], "link": 3, "addit": 3, "tutori": [], "depth": [3, 10, 11], "background": [3, 11], "explan": [3, 11], "describ": [3, 9, 10, 13], "assum": [3, 9], "develop": [], "saw": 1, "typo": 1, "improv": [1, 3], "exist": [1, 3, 13], "guidelin": [1, 3], "page": 3, "knowledg": [3, 9], "guid": [2, 3, 9], "api": 3, "contributor": [0, 2, 3], "data_collect": [], "customization_guid": [], "instal": [3, 11], "img": [], "top": [], "quick_start_img": [], "svg": [], "user_guide_img": [], "reference_img": [], "contributor_guide_img": [], "png": [], "librari": 3, "maximum": 3, "regress": [2, 3], "acceler": 3, "failur": 3, "ag": [3, 5], "mainteanc": 3, "cycl": [3, 5], "infinit": 3, "discount": 3, "total": 3, "cost": 3, "run": [2, 3], "http": 12, "org": [], "doc": [], "stabl": [], "html": 12, "curat": 4, "At": [], "exp_dist": [4, 13], "random_exp_dist": 13, "14797189320089466": [], "054545454630883686": [4, 13], "94691547": [4, 13], "83755133": [4, 13], "74081822": [4, 13], "65525731": [4, 13], "57957828": [4, 13], "comput": [2, 13], "becaus": 13, "overrid": 13, "ad": 13, "005": 13, "99501248": 13, "98388132": 13, "97287468": 13, "96199118": 13, "95122942": 13, "still": 13, "them": 2, "form": 2, "variabl": [10, 13], "unset": 10, "bool_": 10, "boolean": 10, "untrunc": 10, "notic": 2, "length": 10, "deal": 10, "encod": 10, "why": 10, "conditionnali": [], "transform": 2, "prefer": 10, "written": [2, 10], "consid": 10, "6": 10, "Of": 10, "cours": 10, "major": 10, "limit": 10, "complex": [], "lower": 10, "bound": 10, "upper": 10, "x_l": 10, "x_r": 10, "between": 10, "less": [10, 13], "than": 10, "correct": 13, "catch": 13, "arg": [2, 13], "obvious": 13, "fix": [0, 13], "yet": 13, "made": [0, 2], "factori": 0, "back": [], "end": [], "equal": 13, "dist": [], "exponentialdistfunct": [], "exponentialdistlikelihood": [], "distoptim": [], "toto": 2, "titi": 2, "param_0": 2, "pattern": 2, "functionsuperclass": 2, "slice": 2, "output": 2, "briefli": 2, "verifi": 2, "integr": [0, 2], "likelihoodsuperclass": 2, "optimizersuperclass": 2, "modifi": 2, "intern": 0, "control": 0, "u": 0, "relife_obj": [], "relife_method": [], "equival": 13, "explicit": [0, 13], "inspect": 13, "fittin_param": [], "sure": 2, "rest": 2, "code": [0, 2], "properli": 2, "piec": 2, "present": 2, "find": 2, "parametricdistfunct": [], "parametricoptim": [], "fun": [], "parametricdistlikelihood": [], "007": [], "p": [], "py": 2, "don": 2, "kparam": [], "weilbul": [], "fittingresult": [], "built": 2, "build": 2, "func": [], "helper": [], "abc": [], "attributeerror": [5, 6, 8], "median": [5, 6, 8], "ppf": [5, 6, 8], "rv": [5, 6, 8], "random_st": [5, 6, 8], "alia": [], "14": [], "highli": [], "recommend": [], "virtu": [], "activ": 12, "git": 12, "clone": 12, "singl": 12, "branch": 12, "refactor": 12, "github": 12, "com": 12, "rte": 12, "franc": 12, "cd": 12, "sphinx": 12, "myst": 12, "theme": 12, "copybutton": 12, "design": 12, "m": 12, "sphinx_doc": 12, "ea": 12, "server": 12, "directori": 12, "localhost": 12, "8000": 12, "19": [], "pf": [], "20": 3, "lambda": 5, "f": 5, "e": 5, "where": 5, "geq": 5, "kwparam": [5, 6, 8]}, "objects": {"relife2.survival": [[5, 0, 1, "", "Exponential"], [6, 0, 1, "", "Gompertz"], [8, 0, 1, "", "Weibull"]], "relife2.survival.Exponential": [[5, 1, 1, "", "cdf"], [5, 1, 1, "", "chf"], [5, 1, 1, "", "hf"], [5, 1, 1, "", "ichf"], [5, 1, 1, "", "isf"], [5, 1, 1, "", "mean"], [5, 1, 1, "", "median"], [5, 1, 1, "", "mrl"], [5, 1, 1, "", "pdf"], [5, 1, 1, "", "ppf"], [5, 1, 1, "", "rvs"], [5, 1, 1, "", "sf"], [5, 1, 1, "", "var"]], "relife2.survival.Gompertz": [[6, 1, 1, "", "cdf"], [6, 1, 1, "", "chf"], [6, 1, 1, "", "hf"], [6, 1, 1, "", "ichf"], [6, 1, 1, "", "isf"], [6, 1, 1, "", "mean"], [6, 1, 1, "", "median"], [6, 1, 1, "", "mrl"], [6, 1, 1, "", "pdf"], [6, 1, 1, "", "ppf"], [6, 1, 1, "", "rvs"], [6, 1, 1, "", "sf"], [6, 1, 1, "", "var"]], "relife2.survival.Weibull": [[8, 1, 1, "", "cdf"], [8, 1, 1, "", "chf"], [8, 1, 1, "", "hf"], [8, 1, 1, "", "ichf"], [8, 1, 1, "", "isf"], [8, 1, 1, "", "mean"], [8, 1, 1, "", "median"], [8, 1, 1, "", "mrl"], [8, 1, 1, "", "pdf"], [8, 1, 1, "", "ppf"], [8, 1, 1, "", "rvs"], [8, 1, 1, "", "sf"], [8, 1, 1, "", "var"]], "relife2.survival.data": [[0, 0, 1, "", "Data"]]}, "objtypes": {"0": "py:class", "1": "py:method"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"]}, "titleterms": {"welcom": 3, "relife2": 3, "": [1, 2, 3], "document": [3, 12], "instal": 12, "uninstal": [], "python": 12, "code": [], "how": [2, 4, 13], "contribut": 2, "relif": [2, 4], "modul": 12, "quick": 4, "start": 4, "data": [4, 10], "nutshel": [], "surviv": [2, 13], "get": [], "us": 13, "databook": 0, "creat": 12, "model": [2, 13], "custom": 4, "your": [], "instanci": [0, 13], "manipul": 0, "parametr": [], "semi": [], "non": [], "paramet": 13, "estim": 13, "infer": 13, "collect": 4, "explor": [], "lifetim": [4, 10], "analysi": [2, 4], "asset": 4, "manag": 4, "polici": 4, "want": [], "go": [], "deeper": [], "format": 10, "exponenti": 5, "semiparametr": [], "user": 11, "guid": [1, 11], "api": 9, "refer": 9, "new": [], "contributor": 1, "1d": 10, "2d": 10, "exampl": [], "arrai": 10, "distribut": 7, "regress": [], "nonparametr": [], "function": 2, "object": [0, 2], "likelihood": 2, "optim": 2, "factori": 2, "The": 0, "import": 13, "gompertz": 6, "weibul": 8, "unix": 12, "maco": 12, "virtualenv": 12, "conda": 12, "option": 12, "1": 12, "step": 12, "build": 12, "from": 12, "sourc": 12, "2": 12, "3": 12, "4": 12}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx": 60}, "alltitles": {"The databook object": [[0, "the-databook-object"]], "DataBook instanciation": [[0, "databook-instanciation"]], "Databook manipulations": [[0, "databook-manipulations"]], "Contributor\u2019s guide": [[1, "contributor-s-guide"]], "Contributor's guide": [[1, null]], "How to contribute to ReLife\u2019s survival analysis ?": [[2, "how-to-contribute-to-relife-s-survival-analysis"]], "Models\u2019 factories": [[2, "models-factories"]], "Models\u2019 objects": [[2, "models-objects"]], "Function object": [[2, "function-object"]], "Likelihood object": [[2, "likelihood-object"]], "Optimizer object": [[2, "optimizer-object"]], "Welcome to ReLife2\u2019s documentation!": [[3, "welcome-to-relife2-s-documentation"]], "Quick start": [[4, "quick-start"]], "Data collection": [[4, "data-collection"]], "Lifetime data analysis": [[4, "lifetime-data-analysis"]], "Asset management policy": [[4, "asset-management-policy"]], "How to custom ReLife ?": [[4, "how-to-custom-relife"]], "Exponential": [[5, "exponential"]], "Gompertz": [[6, "gompertz"]], "Distributions": [[7, "distributions"], [7, null]], "Weibull": [[8, "weibull"]], "API reference": [[9, "api-reference"], [9, null]], "Lifetime data format": [[10, "lifetime-data-format"]], "Lifetimes as 1d array": [[10, "lifetimes-as-1d-array"]], "Lifetimes as 2d array": [[10, "lifetimes-as-2d-array"]], "User guide": [[11, "user-guide"], [11, null]], "Installation": [[12, "installation"]], "Step 1 : build from source": [[12, "step-1-build-from-source"]], "Step 2 : Create virtualenv": [[12, "step-2-create-virtualenv"]], "Unix/macOS": [[12, "unix-macos"]], "Option 1 : conda": [[12, "option-1-conda"]], "Step 3 : install python module": [[12, "step-3-install-python-module"]], "Step 4 (optional) : build documentation": [[12, "step-4-optional-build-documentation"]], "How to use survival model": [[13, "how-to-use-survival-model"]], "Model importation": [[13, "model-importation"]], "Model instanciation": [[13, "model-instanciation"]], "Parameters estimations": [[13, "parameters-estimations"]], "Inference": [[13, "inference"]]}, "indexentries": {"data (class in relife2.survival.data)": [[0, "relife2.survival.data.Data"]], "exponential (class in relife2.survival)": [[5, "relife2.survival.Exponential"]], "cdf() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.cdf"]], "chf() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.chf"]], "hf() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.hf"]], "ichf() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.ichf"]], "isf() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.isf"]], "mean() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.mean"]], "median() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.median"]], "mrl() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.mrl"]], "pdf() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.pdf"]], "ppf() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.ppf"]], "rvs() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.rvs"]], "sf() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.sf"]], "var() (relife2.survival.exponential method)": [[5, "relife2.survival.Exponential.var"]], "gompertz (class in relife2.survival)": [[6, "relife2.survival.Gompertz"]], "cdf() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.cdf"]], "chf() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.chf"]], "hf() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.hf"]], "ichf() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.ichf"]], "isf() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.isf"]], "mean() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.mean"]], "median() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.median"]], "mrl() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.mrl"]], "pdf() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.pdf"]], "ppf() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.ppf"]], "rvs() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.rvs"]], "sf() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.sf"]], "var() (relife2.survival.gompertz method)": [[6, "relife2.survival.Gompertz.var"]], "weibull (class in relife2.survival)": [[8, "relife2.survival.Weibull"]], "cdf() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.cdf"]], "chf() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.chf"]], "hf() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.hf"]], "ichf() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.ichf"]], "isf() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.isf"]], "mean() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.mean"]], "median() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.median"]], "mrl() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.mrl"]], "pdf() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.pdf"]], "ppf() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.ppf"]], "rvs() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.rvs"]], "sf() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.sf"]], "var() (relife2.survival.weibull method)": [[8, "relife2.survival.Weibull.var"]]}})