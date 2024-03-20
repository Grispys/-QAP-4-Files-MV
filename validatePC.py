def validate_pCode(pCode):
    '''
    I just now discovered i can do this, and then it'll show up when you hover "validate_pcode" in the program! neato!
    I took the postal code validation from a previous QAP of mine, and updated it with re to compact it much better.
    it's only like 8 lines now~!
    '''
    import re
    # gets rid of blank space
    pCode = pCode.replace(" ", "").upper()
    # postal code config
    pCodeBase = r"^[A-Z]\d[A-Z] *\d[A-Z]\d$"
    # sees if it matches
    if re.match(pCodeBase, pCode):
        return True
    else:
        return False
    
   
