
public class database {
	
	private String age,gender,branch;
	private int id,password;
	private int user_accno;
	
	private  String name;

	private String mobileno;
	private  String emailid;
	
	private  String pincode;
	private  int deposite;
	private String bank_name;
	private String name1;
    
	private int user_pin;
	
	public database(int id,int password,String name,String age,String gender,String mail,String mobileno,String branch)
{
	this.id=id;
	this.name=name;
	this.age=age;
	this.gender=gender;
	this.emailid=mail;
	this.mobileno=mobileno;
	this.branch=branch;
	this.password=password;
	
}
public   database(int user_accno,String name,String gender,String mobileno,String emailid,String branch,String pincode,int deposite,String bank_name,int admin_id,String admin_name,int user_pin)
{
	this.user_accno=user_accno;
	this.name=name;
	this.gender=gender;
	this.mobileno=mobileno;
	this.emailid=emailid;
	this.branch=branch;
	this.pincode=pincode;
	this.deposite=deposite;
	this.bank_name=bank_name;
	this.id=admin_id;
	this.name1=admin_name;
	this.user_pin=user_pin;
}
public void setName1(String name1)
{
	this.name1=name1;
}
public String getName1()
{
	return name1;
}
public int getPassword() {
	return password;
}
public void setPassword(int password)
{
	this.password=password;
}
public String getBranch()
{
	return branch;
}
public void setMobileno(String mobileno)
{
	this.mobileno=mobileno;
}

public String getGender()
{
	return gender;
}
public void setGender(String gender)
{
	this.gender=gender;
}
public  String getAge()
{
	return age;
}
public void setAge(String age)
{
	this.age=age;
}

public String getname()
{
	return name;
}
public void setname(String name)
{
	this.name=name;
}


	
	public void setUser_pin(int user_pin)
	{
		this.user_pin=user_pin;
	}
	public int getUser_pin()
	{
		return user_pin;
	}
	
	

	public int getId()
	{
		return id;
	}
	public void setId(int id)
	{
		this.id=id;
	}
	public void setBank_name(String bank_name)
	{
		this.bank_name=bank_name;
	}
	public String getBank_name()
	{
		return bank_name;
	}
	public void setDeposite(int deposite)
	{
		this.deposite=deposite;
	}
	public int getDeposite()
	{
		return deposite;
	}
	public void setPincode(String pincode)
	{
		this.pincode=pincode;
	}
	public String getPincode()
	{
		return pincode;
	}
	public void setBranch(String branch)
	{
		this.branch=branch;
	}

	public void setEmailid(String emailid)
	
	{
		this.emailid=emailid;
	}
	public String getEmailid()
	{
		return emailid;
	}
		public String getMobileno()
	{
		return mobileno;
	}
	
	public void setName(String change_name)
	{
		this.name = change_name;
	
	}
	
	public String getName()
	{
		return name;
	}

	
	public  void setUser_accno(int user_accno) {
		this.user_accno = user_accno;

		
	}
	public   int getUser_accno() {
		return user_accno;
	}
}
