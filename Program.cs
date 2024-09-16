using BUSINESS.Contracts;
using BUSINESS.Implementatýns;
using DOMAIN;
using DOMAIN.Implementations;
using SHARED.DataContracts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IItemBusinessEngine, ItemBusinessEngine>();
builder.Services.AddScoped<ICustomerBusinessEngine, CustomerBusinessEngine>();
builder.Services.AddScoped<IOrderBusinessEngine, OrderBusinessEngine>();
builder.Services.AddScoped<IAddressBusinessEngine, AddressBusinessEngine>();
builder.Services.AddScoped<IContactBusinessEngine, ContactBusinessEngine>();
builder.Services.AddScoped<ICommentBusinessEngine, CommentBusinessEngine>();
builder.Services.AddScoped<IAuthBusinessEngine, AuthBusinessEngine>();
var app = builder.Build();
app.UseCors(builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}
);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
